import {Student} from "../model/Student";
import {createContext, useContext, useEffect, useState} from "react";
import axios from "axios";
import {R} from "../model/R";

const HiddenContext = createContext(false)

export default function P4() {

    const [students, setStudents] = useState<Student[]>([])
    const [hidden, setHidden] = useState<boolean>(false)

    useEffect(() => {
        async function updateStudents() {
            const resp = await axios.get<R<Student[]>>("http://localhost:8080/api/students");
            setStudents(resp.data.data)
        }

        updateStudents()
    }, [])


    function showOrHide() {
        setHidden((old) => {
            return !old
        })
    }

    return <HiddenContext.Provider value={hidden}>
        <input type="button" value={hidden ? '显示年龄' : '隐藏年龄'} onClick={showOrHide}/>
        <P41 students={students}></P41>
    </HiddenContext.Provider>
}


function P41({students = []}: { students: Student[] }) {
    const list = students.map(s =>
        <P42 student={s} key={s.id}></P42>
    );
    return <>{list}</>
}


function P42({student}: { student: Student }) {
    const hidden = useContext(HiddenContext)
    const hiddenJsx = !hidden && <span>{student.age}</span>
    return <div>{student.name} {hiddenJsx}</div>
}
