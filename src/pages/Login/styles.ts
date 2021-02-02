import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    background-image: linear-gradient(to bottom, #213991, #525ea8, #7c85bf, #a6add4, #d3d7e9);
    display: flex;
    justify-content: center;
    align-items: center;
    .card{
        background-color: #FFFFFF;
        max-width: 450px;
        width: 100%;
        height: auto;
        border-radius: 20px;
        padding: 40px;
    }
    .card-header{
        text-align: center;
        h1{
            font-size: 36px;
            color: #202020;
            margin-bottom: 10px
        }
        h2{
            font-size: 18px;
            color: #2B2B2B;
            font-weight: normal;
        }
    }
    .card-body{
        width: 100%;
        margin-top: 40px;
        flex-direction: column;
        input{
            width: 100%;
            margin: 10px 0px;
            border-radius: 10px;
            box-shadow: 0px 0px 7px 0px #CECECE;
            border: none;
            padding: 15px;
            ::placeholder{
                font-size: 16px;
                color: #ABABAB;
                font-style: italic;
            }
        }
        .input-password{
            display: flex;
            position: relative;
            img{
                position:absolute;
                top: 22px;
                right: 10px;
                cursor: pointer;
            }
        }
    }
    .btn{
        width: 100%;
        padding: 15px;
        border: none;
        border-radius: 10px;
        cursor: pointer;
    }
    .btn-info{
        display: flex;
        background-color: #213991;
        color: #FFFFFF;
        font-size: 20px;
        justify-content: space-between;
        margin-top: 20px;
        span{
            width: 100%
        }
    }
    .error{
        margin-top: 20px;
        background-color: #FFA680;
        padding: 8px;
        border-radius: 4px;
        color: #FFFFFF;
    }
    @media(max-width: 800px) {
        .card{
            margin: 0 10px;
            padding: 15px;
        }
        .card-body{
            padding: 20px;
            margin-top: 10px
        }
  }
`;

export const Img = styled.img`
    width: 20px;
`;
