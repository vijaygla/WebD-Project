export const CurrentTime = () => {
    let time = new Date();

    return <p>
        This is CurrentTime: {time.toLocaleDateString()} {time.toLocaleTimeString()}
    </p>
}

