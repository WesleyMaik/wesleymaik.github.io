//Modules
import styled from "styled-components";

const AboutMe = () => {
    const Container = styled.div`
        width:100%;

        color:var(--bg-primary);
        background-color:var(--color-primary);

        padding:1em;

        .wrapper{
            display:flex;
            flex-direction:row;
            justify-content:space-evenly;
            align-items:center;

            @media screen and (max-width:768px) {
                flex-direction:column;
            }
        }
    `;
    
    return(
        <Container id="me">
            <h2 className="title">/eu</h2>
            <div className="wrapper">
                <div className="img">
                    <img src="/assets/images/coding_tech.svg" width={500}/>
                </div>
                <div className="text">a</div>
            </div>
        </Container>
    );
};

export default AboutMe;