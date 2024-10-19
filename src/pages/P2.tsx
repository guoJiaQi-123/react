import React from 'react';
import { Student } from '../model/Student';
import P1 from './P1';

export default function P2({ students, hideAge }: { students: Student[]; hideAge: boolean }) {
	const jsx = students.map((e) => <P1 student={e} key={e.id} hideAge={hideAge}></P1>);

	return <>{jsx}</>;
}
