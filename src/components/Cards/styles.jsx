import styled from "styled-components";



export const Container = styled.div`
    width: 63%;
    margin: 0 auto;
    margin-bottom: 60px;
    display: grid;    
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr ));
    grid-auto-rows: minmax(8rem, auto);
    grid-column-gap: 30px;
    grid-row-gap: 30px;
    justify-content: center;

`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;

    background: #fff;

    border-radius: 10px;
    padding: 0 0 36px;

    strong {
      padding: 33px 33px 24px;

      font-family: "Poppins", sans-serif;
      font-weight: 600;
    }

    section {
      display: flex;
      align-items: center;

      img {
        width: 48px;
        height: 48px;
        margin-left: 33px;

        border-radius: 50%;
      }

      p {
        margin-left: 15px;

        font-family: "Poppins", sans-serif;
        font-weight: 400;
        letter-spacing: 0.32px;
        color: #6d6d6d;
        opacity: 1;
      }
    }

  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    margin-top: 91px;

    background: #fff;

    border-radius: 10px;
    padding: 0 0 36px;

    strong {
      padding: 33px 33px 24px;

      font-family: "Poppins", sans-serif;
      font-weight: 600;
    }

    section {
      display: flex;
      align-items: center;

      img {
        width: 48px;
        height: 48px;
        margin-left: 33px;

        border-radius: 50%;
      }

      p {
        margin-left: 15px;

        font-family: "Poppins", sans-serif;
        font-weight: 400;
        letter-spacing: 0.32px;
        color: #6d6d6d;
        opacity: 1;
      }
    }
  }
`;

export const Image = styled.img`

  border-radius: 10px 10px 0 0;
  @media (min-width: 768px) {
    width: 380px;
    height: 253px;

    border-radius: 10px 10px 0 0;
  }
`;
