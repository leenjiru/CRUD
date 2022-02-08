<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class UsersModel extends CI_Model
{
	public function getUsersModel()
	{
		$query = $this->db->get('employee');
		return $query->result();
	}
	public function addUsersModel($data)
	{
		$query = $this->db->insert('employee', $data);
		return true;
	}
	public function updateUsersModel($id, $data)
	{
		$this->db->set($data);
		$this->db->where("id", $id);
		$this->db->update('employee');
		return true;
	}
	public function deleteUsersModel($id)
	{
		$this->db->where('id', $id);
		$this->db->delete('employee');
		return true;
	}
}
