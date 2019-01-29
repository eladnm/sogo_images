<?php
echo "you did it";
$target_file = "images/" . basename($_FILES["image"]["name"]);
$imageFileType = strtolower(pathinfo($target_file, PATHINFO_EXTENSION));

$check = getimagesize($_FILES["image"]["tmp_name"]);
if (!empty($_FILES['image'])) {
	if ($_FILES["image"]["size"] < 10485760 && $check !== false) {
		$uploadOk = 1;
		$ext = pathinfo($_FILES['image']['name'], PATHINFO_EXTENSION);
		$image = time() . '.' . $ext;
		move_uploaded_file($_FILES["image"]["tmp_name"], 'images/' . $image);
		echo "Image uploaded successfully as " . $image;
	} else {
		echo "Image Is too Large";
	}
} else {
	echo "Image Is Empty";
}
?>