import styled, { css } from "styled-components";

export const List = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`;

export const Item = styled.li`
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-gap: 10px;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid ${({ theme }) => theme.color.alto};

    ${({ hidden }) => hidden && css`
        display: none;
    `}
`;

export const Content = styled.span`
    ${({ done }) => done && css`
        text-decoration: line-through;
    `}    
`;

export const Button = styled.button`
    width: 30px;
    height: 30px;
    color: ${({ theme }) => theme.color.white};
    border: none;
    transition: filter 0.5s linear;

    &:hover {
        filter: brightness(110%);
    }

    &:active {
        filter: brightness(120%);
    }
`;

export const ToggleDoneButton = styled(Button)`
    background-color: ${({ theme }) => theme.color.forestGreen};
`;

export const RemoveButton = styled(Button)`
    background-color: ${({ theme }) => theme.color.crimson};
`;