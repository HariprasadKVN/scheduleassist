import HOC from "./HOC"

const B:React.FC<{authorized:{allowa:boolean, allowb:boolean}}> = ({authorized}) =>{    
    return <div>
        {authorized.allowb?"This is component A":"Not Authorized"}
    </div>
}

const HOCB = HOC(B);
export default HOCB;