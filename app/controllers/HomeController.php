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
				$message->from('noreply@QoobRoom.com','QoobRoom');
				$message->to('thedamaxstudio@gmail.com')->cc('sm@realitygroup.ru')->cc('greenwall@qoobroom.ru')->subject('QoobRoom - Заказ звонка');
			});
			return 'success';
		endif;
	}

	public function calc(){
		
		$typep = Input::get('old_radio');
		if($typep=='1') $type = "дизайнер";
		if($typep=='0') $type = "покупатель";
		$name = Input::get('name');
		$email = Input::get('email');
		 $file = FALSE;
		 if(isset($_FILES) && $_FILES['file']['error'] == 0):
			if(move_uploaded_file($_FILES['file']['tmp_name'],getcwd().'/download/'.$_FILES['file']['name'])):
			 $file = getcwd().'\download\\'.$_FILES['file']['name'];
			endif;
		   endif;
		$filestr = "http://qoobroom.ru/download/".$_FILES['file']['name'];
		$validator = Validator::make(
			array('name'=>$name,'email'=>$email),
			array('name'=>'required|min:3','email'=>'required|min:5')
			);
		if($validator->fails()):
			return "false";
		else:
			DB::insert('insert into users (name, email) values (?, ?)',array($name, $email));
			$data = array('type' => $type,'name' => $name,'email' => $email, 'file' => $filestr);
			Mail::send('emails.calc', $data, function($message){
				$message->from('noreply@QoobRoom.com','QoobRoom');
				$message->to('thedamaxstudio@gmail.com')->cc('sm@realitygroup.ru')->cc('greenwall@qoobroom.ru')->subject('QoobRoom - Заказ расчета стоимости');
			});
			return "success";
		endif;
		
	}
	
	public function download3d(){
		
		$name = Input::get('name');
		$email = Input::get('email');
		$link = URL::to('download/QRGreenWall.pdf');
		$validator = Validator::make(
			array('name'=>$name,'email'=>$email),
			array('name'=>'required|min:3','email'=>'required|min:5')
		);
		if($validator->fails()):
			return "false";
		else:
			DB::insert('insert into users (name, email) values (?, ?)',array($name,$email));
			$data = array('link'=>$link,'name'=>$name);
			Mail::send('emails.download3d',$data,function($message) use ($email) {
				$message->from('noreply@QoobRoom.com','QoobRoom');
				$message->to($email)->subject('QoobRoom - 3D модели');
			});
			return $link;
		endif;
	}
	
}