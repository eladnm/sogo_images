<?php
$target_dir = "images/";
$errors = array();
$success = array();
$max_file_size_mb = 10;

if (!isset($_FILES["images"]["tmp_name"])) {
	$errors[] = 'Select files please';
} elseif (count($_FILES["images"]["tmp_name"]) > 5) {
	$errors[] = 'Limit is 5 files';
} else {
	foreach ($_FILES["images"]["tmp_name"] as $key => $name) {
		if ($_FILES["images"]["size"][$key] > 1024 * 1024 * $max_file_size_mb) {
			$errors[] = "Size of file {$_FILES["images"]["name"][$key]} more than {$max_file_size_mb}Mb";
		} else {
			$check = getimagesize($name);
			if (!$check) {
				$errors[] = "File {$_FILES["images"]["name"][$key]} is not an image";
			} else {
				$extension = '.' . str_replace(['image/jpeg', 'image/png', 'image/gif'], ['jpg', 'png', 'gif'], $check["mime"]);
				$target_file = $target_dir . md5($_FILES["images"]["name"][$key] . time()) . $extension;
				if (move_uploaded_file($name, $target_file)) {
					$success[] = "File {$_FILES["images"]["name"][$key]} successfuly uploaded";
				} else {
					$errors[] = "An error occurred during the upload file {$_FILES["images"]["name"][$key]}";
				}
			}
		}

	}
}
if (!empty($success)) {
	echo implode('. ', $success) . '. ';
}
if (!empty($errors)) {
	echo "Error: " . implode('. ', $errors);
}

?>