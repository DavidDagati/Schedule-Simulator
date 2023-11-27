import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import SemesterComponent from "../components/SemesterComponent";
import { convertTerm } from "../utils/utils";

//TODO: Replace MenuItems with real program data
export default function Results() {
    const { state } = useLocation()
    const [sequence, setSequence] = useState<Object>({})
    const {programId} = state
    console.log(programId);
    console.log('sequence: ', sequence);

    //Fetch results
    useEffect(() => {
        async function fetchData() {
            const res = await fetch('http://localhost:8000/program', {
                method: "POST",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({programId})
            })
            setSequence(await res.json() as any)
        }
        fetchData()
    }, [])

    if(Object.keys(sequence).length == 0) {
        return <h1>Loading...</h1>
    }

    return (
        <>
            <h1>Simulated Sequence</h1>
            <div className="flex justify-center gap-5">
                {
                    Object.keys(sequence).map((key, i) => {
                        const term = convertTerm(key);
                        if(sequence[key].length == 0) {
                            return <></>
                        }
                        else {
                            return (
                                <SemesterComponent term={term} classes={sequence[key]}/> 
                            )
                        }
                    })
                }
            </div>
        </>
    )
}