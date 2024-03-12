const HOC = (WrappedComponent: any): React.FC => {
    const authorized = { allowa: false, allowb: true };

    const x: React.FC = () => {
        return <>
            <p>This is from HOC</p>
            <WrappedComponent authorized={authorized}></WrappedComponent>
        </>
    }

    return x;
}

export default HOC;