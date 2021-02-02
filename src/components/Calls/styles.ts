import styled from 'styled-components';

export const Container = styled.div`
    .content{
        width: 100%;
        background-color: #FCFCFB;
        min-height: 100vh;
        max-height: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
    }
    .calls{
        width: 100%;
        padding: 20px;
        .group-call{
            margin-top: 40px;
        }
        .key{   
                 display: flex;
                 align-items: center;
                 color: #656565;
                 hr{
                    width: 50%;
                    border: none;
                    border-bottom: 1px dotted #656565;
                    height:1px;
                    margin: 0 10px;
                 }
        }
        select{
            max-width: 170px;
            width: 100%;
            padding: 10px;
            border: 1px solid #e7e7e9;
            border-radius: 5px;
            color: #213991;
            font-weight: 600;
            right: 21px;
            top: 0;
            position: absolute;
        }
        div{
            width: 100%;
        }
            .call{
                width: 100%;
                border: 1px solid #e7e7e9;
                height: auto;
                margin-top: 12px;
                background-color: #ffffff;
                padding: 12px 15px;
                cursor: pointer;
                border-radius: 10px;
                .call-header{
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
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    span{
                        color: #FF81A3;
                        font-size: 12px;
                        font-weight: bold;
                        margin-right: 20px;
                    }
                    button{
                        padding: 4px;
                        border: none;
                        border-radius: 4px;
                        background-color: #213991;
                        color: #ffffff;

                    }
                }
                :hover{
                    background-color: RGBA(208,208,208,.3)
                }
                hr{
                    border-top: none;
                    border-bottom: 1px solid #D0D0D0;
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
                .footer{
                    display: flex;
                    justify-content: center;
                    margin-top: 10px;
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

`;