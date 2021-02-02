import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    .content{
        width: 100%;
        background-color: #FCFCFB;
        min-height: 100vh;
        max-height: auto;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .calls{
        width: 100%;
        padding: 20px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
            .call{
                width: 100%;
                border: 1px solid #D0D0D0;
                height: auto;
                margin-top: 40px;
                background-color: #ffffff;
                padding: 12px 15px;
                cursor: pointer;
                border-radius: 10px;
                .call-header{
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    .number{
                        color: #213991;
                        font-weight: bold;
                    }
                    .time{
                        color: RGBA(33,57,145,.7);
                        font-weight: 400;
                    }
                }
                .call-info{
                    margin-top: 5px;
                    span{
                        display: flex;
                        justify-content: flex-end;
                        color: #FF81A3;
                        font-size: 12px;
                        font-weight: bold;
                        margin-right: 20px;
                    }
                }
                :hover{
                    background-color: RGBA(208,208,208,.5)
                }
                hr{
                    border: 1px solid #D0D0D0;
                }
                .description{
                    margin: 10px 0;
                    .title{
                        color: #213991;
                        font-weight: 700;
                    }
                    span{
                        width: 100%;
                        color: #656565;
                        font-weight: 400;
                    }

                }
            }
            .loading{
                display: flex;
                justify-content: center;
                align-items: center;
            }
    }
/*********** Custom Style **********/

.pagination>.active>a{
    background-color: #213991;
    border-color: #213991;
}
/*********** Custom Style **********/

    @media(max-width: 1200px) {
        /* .calls{
            width: 100%;
            border-radius: none;
        } */
  }
`;