import axios from "axios";
import {Student} from "../model/Student";
import {R} from "../model/R";
import {useEffect, useState} from "react";

export default function P3({id}: { id: number }) {

    const [student, setStudent] = useState({name: "xx"})

    async function updateStudent() {
        // 参数一：请求url的地址
        // 参数二：可选的配置对象（例如可以包含请求头数据）
        const resp = await axios.get<R<Student>>(`http://localhost:8080/api/students/${id}`);
        setStudent(resp.data.data)
    }


    // 钩子函数，当id发生变化时才会执行参数一的方法
    useEffect(() => {
        updateStudent()
    }, [id])


    return <h3>{student.name}</h3>
}
