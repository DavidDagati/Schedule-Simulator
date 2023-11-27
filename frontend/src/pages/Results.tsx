import { useLocation } from "react-router-dom";
// import SemesterComponent from "../components/SemesterComponent";

//TODO: Replace MenuItems with real program data
export default function Results(props: any) {
    const { state } = useLocation()
    const {programId} = state
    console.log(state);
    console.log(programId);
    
    //UseEffect for results

    // const { results } = await fetch('localhost:8050/sequence', {
    //     method: 'POST',
    //     headers: {
    //         "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify({test: 'test'})
    // })

    return (
        <>
            <h1>Simulated Sequence</h1>
            {/* <div className="flex items-center justify-center gap-5">
                {
                    
                }
                <SemesterComponent classes={['class 1', 'class 2', 'class 3', 'class 4', 'class 5']} />
                <SemesterComponent classes={['class 1', 'class 2', 'class 3', 'class 4', 'class 5']} />
                <SemesterComponent classes={['class 1', 'class 2', 'class 3', 'class 4', 'class 5']} />
            </div> */}
        </>
    )
}