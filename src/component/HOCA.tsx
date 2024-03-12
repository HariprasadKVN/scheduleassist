import HOC from "./HOC"

const A:React.FC<{authorized:{allowa:boolean, allowb:boolean}}> = ({authorized}) =>{    
    return <div>
        {authorized.allowa?"This is component A":"Not Authorized"}
    </div>
}

const HOCA = HOC(A);
export default HOCA;