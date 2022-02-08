<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class UsersController extends CI_Controller
{
	public function __construct()
	{
		parent::__construct();

		$this->load->model('UsersModel', 'myUsers');
	}

	public function getUsers()
	{
		$data = $this->myUsers->getUsersModel();
		echo json_encode([
			"success" => true,
			"results" => $data,
			"total" => 10,
		]);
	}

	public function saveUsers()
	{
		$data['first_name']=$this->input->post('first_name');
		$data['last_name']=$this->input->post('last_name');
		$data['phone']=$this->input->post('phone');
		$data['email']=$this->input->post('email');

		//validations
		//check if email is unique

		$query  = $this->db->get_where('employee',  array('email'=>$this->input->post('email')));

		if ($query->num_rows() > 0)
		{
			echo json_encode([
				"message" => "Exists email",
				"success"=>false,
			]);
		}
		else
			{
				$response=$this->myUsers->addUsersModel($data);
				if($response==true){
					echo json_encode([
						"message" => "Save was successful",
						"success"=>true
					]);
				}
				else{
					echo json_encode([
						"message" => "Save not successful",
						"success"=>true
					]);
				}
			}

	}
	public function updateUsers()
	{
		$data['id'] = $this->input->post('id');
		$data['first_name'] = $this->input->post('first_name');
		$data['last_name'] = $this->input->post('last_name');
		$data['phone'] = $this->input->post('phone');
		$data['email'] = $this->input->post('email');

		$response = $this->myUsers->updateUsersModel($data['id'], $data);
		if ($response == true) {
			echo json_encode([
				"message" => "Updated successfully",
				"success" => true
			]);
		} else {
			echo json_encode([
				"message" => "Not succcess",
				"success" => false,
			]);
		}
	}

	public function deleteUser()
	{
		$id = $this->input->post('id');
		$this->myUsers->deleteUsersModel($id);
		return true;
	}
}
