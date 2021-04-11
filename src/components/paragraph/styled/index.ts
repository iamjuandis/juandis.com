import styled from 'styled-components';
import COLOR from '../../../assets/style/colors';
import { ParagraphType } from '../../../types/interfaces';

export const ParagraphContainer = styled.div<ParagraphType>`
  column-count: ${(props) => props.columns};
  column-gap: 30px;
  color: ${(props) => (props.color ? props.color : COLOR.blue_universe)};
  line-height: 150%;
  font-size: ${(props) => (props.size ? `${props.size}em` : '1em')};
  width: 100%;
  a {
    color: ${(props) => (props.color ? props.color : COLOR.blue_universe)};
    border-bottom: 1px solid
      ${(props) => (props.color ? `${props.color}55` : `${COLOR.blue_universe}55`)};
    font-size: 1em;
    &:hover {
      color: ${(props) =>
        props.highlightColor ? props.highlightColor : `${COLOR.blue_universe}77`};
      border-bottom-color: ${(props) =>
        props.highlightColor ? props.highlightColor : COLOR.blue_universe};
    }
  }
  ul,
  ol {
    display: table;
    list-style-position: inside;
    margin: 10px 0;
    li {
      display: table-row;
      &::before {
        content: '•';
        display: table-cell;
        text-align: right;
        padding-right: 10px;
      }
    }
    &.brick {
      display: inline-flex;
      margin: 30px 0;
      width: 100%;
      li {
        background: ${(props) =>
          props.highlightColor ? `${props.highlightColor}33` : `${COLOR.blue_universe}33`};
        color: ${(props) => (props.highlightColor ? props.highlightColor : COLOR.blue_universe)};
        display: inline-flex;
        margin-right: 30px;
        padding: 10px 15px;
        &::before {
          content: none;
        }
      }
    }
    &.big-letter {
      display: inline-block;
      margin: 0;
      width: 100%;
      li {
        display: block;
        font-size: 1.5em;
        line-height: 150%;
        margin: 30px 0;
        &::before {
          content: none;
        }
        strong,
        b {
          color: ${(props) => (props.highlightColor ? props.highlightColor : COLOR.blue_universe)};
          font-weight: bolder;
          font-size: 1em;
        }
      }
    }
  }
  @media screen and (max-width: 510px) {
    column-count: 1;
    ul,
    ol {
      margin: 0;
      li {
        margin: 10px 0;
      }
      &.brick {
        display: inline-block;
        margin: 0;
        li {
          margin: 10px 0;
          margin-right: 15px;
        }
      }
      &.big-letter {
        margin: 0;
        li {
          margin: 10px 0;
        }
      }
    }
  }
`;
