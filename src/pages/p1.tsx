import '../css/P1.css';
import { Student } from '../model/Student';
import React from 'react';

export default function P1({ student, hideAge }: { student: Student; hideAge: boolean }) {
	function clickHandle(e: React.MouseEvent) {
		console.log(student);
		console.log(e);
	}

	let ageFragment;

	if (hideAge) {
		ageFragment = null;
	} else {
		ageFragment = <span>年龄：{student.age}</span>;
	}

	return (
		<div className="student">
			<div className="photo">
				<img src={student.photo} alt="讲师图片" onClick={clickHandle} />
			</div>
			<h1>{student.name}</h1>
			<h2>{student.id}</h2>
			<p>
				性别 {student.sex} {ageFragment}
			</p>
		</div>
	);
}
