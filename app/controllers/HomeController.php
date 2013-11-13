<?php

class HomeController extends BaseController {

	public function index(){
		return View::make('index');
	}
	
	public function recall(){
		
		$name = Input::get('name');
		$phone = Input::get('phone');
		if(Input::get('time')!= ''):
			$time = Input::get('time');
		else:
			$time = "не указано";
		endif;
		$validator = Validator::make(
			array('name' => $name,'phone' => $phone),
			array('name' => 'required|min:3','phone' => 'required|min:5')
		);
		if($validator->fails()):
			return "false";
		else:
			$data = array('name'=>$name,'phone'=>$phone,'time'=>$time);
			Mail::send('emails.recall',$data,function($message){
				$message->from('noreply@qoobroom.ru','QoobRoom');
				$message->to('thedamaxstudio@gmail.com')->cc('sm@realitygroup.ru')->cc('greenwall@qoobroom.ru')->subject('QoobRoom - Заказ звонка');
			});
			return 'success';
		endif;
	}

	public function calculation(){
		
		$typep = Input::get('old_radio');
		if($typep == 1):
			$type = "дизайнер";
		elseif($typep == 0):
			$type = "покупатель";
		endif;
		$name = Input::get('name');
		$email = Input::get('email');
		$filePath = '';
		if(isset($_FILES['file']['name']) && $_FILES['file']['error'] == 0):
			if(move_uploaded_file($_FILES['file']['tmp_name'],getcwd().'/download/'.$_FILES['file']['name'])):
				//$file = getcwd().'/download/'.$_FILES['file']['name'];
				$filePath = "http://qoobroom.ru/download/".$_FILES['file']['name'];
			endif;
		endif;
		$validator = Validator::make(array('name'=>$name,'email'=>$email),array('name'=>'required|min:3','email'=>'required|min:5'));
		if($validator->fails()):
			return "false";
		else:
			DB::insert('insert into users (name, email) values (?, ?)',array($name, $email));
			$data = array('type'=>$type,'name'=>$name,'email'=>$email,'file'=>$filePath);
			Mail::send('emails.calc', $data, function($message){
				$message->from('noreply@qoobroom.ru','QoobRoom');
				$message->to('thedamaxstudio@gmail.com')->cc('sm@realitygroup.ru')->cc('greenwall@qoobroom.ru')->subject('QoobRoom - Заказ расчета стоимости');
			});
			return "success";
		endif;
		
	}
	
	public function download3d(){
		
		$name = Input::get('name');
		$email = Input::get('email');
		$link = URL::to('download/qoobroom.rar');
		$validator = Validator::make(
			array('name'=>$name,'email'=>$email),
			array('name'=>'required|min:3','email'=>'required|min:5')
		);
		if($validator->fails()):
			return "false";
		else:
			//DB::insert('insert into users (name, email) values (?, ?)',array($name,$email));
			$data = array('link'=>$link,'name'=>$name);
			Mail::send('emails.download3d',$data,function($message) use ($email) {
				$message->from('noreply@qoobRoom.ru','QoobRoom');
				$message->to($email)->subject('QoobRoom - 3D модели');
			});
			$data = array('link'=>$link,'name'=>$name, 'email'=>$email);
			Mail::send('emails.downtoadmin',$data,function($message) {
				$message->from('noreply@qoobRoom.ru','QoobRoom');
				$message->to('thedamaxstudio@gmail.com')->cc('sm@realitygroup.ru')->cc('greenwall@qoobroom.ru')->subject('QoobRoom - 3D модели');
			});
			return $link;
		endif;
	}
	
}