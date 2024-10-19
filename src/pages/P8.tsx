import React, {useState} from "react";
import axios from "axios";
import {R} from "../model/R";

export default function P8() {
    const [student, setStudent] = useState({name: "", sex: "男", age: 18})
    const [messageJsx, setMessageJsx] = useState("")

    const options = ["男", "女"]
    let jsx = options.map(e => <option key={e}>{e}</option>);

    async function postStudent() {
        let resp = await axios.post<R<string>>("http://localhost:8080/api/students", student);
        setMessageJsx(resp.data.data)
    }

    function onChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
        setStudent(old => {
            return {...old, [e.target.name]: e.target.value};
        })
    }

    function onClick() {
        postStudent()
    }

    return <form>
        <div>
            <label>姓名</label>
            <input type="text" value={student.name} onChange={onChange} name='name'/>
        </div>
        <div>
            <label>性别</label>
            <select value={student.sex} onChange={onChange} name='sex'>
                {jsx}
            </select>
        </div>
        <div>
            <label>年龄</label>
            <input type="text" value={student.age} onChange={onChange} name='age'/>
        </div>
        <div>
            <input type='button' value='新增' onClick={onClick}/>
        </div>
        {messageJsx}
    </form>
}
