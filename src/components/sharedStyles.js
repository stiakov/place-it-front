import { css } from '@emotion/core';

const addButtonStyles = css`
  font-size: 0.8rem;
  padding-left: 22px;
  padding-right: 22px;
  display: flex;
  text-align: center;
  vertical-align: bottom;
  cursor: pointer;
  color: white;
  background: linear-gradient(to top, #7892c2 5%, #007cfd 100%);
  border-radius: 1rem;
  z-index: 2;

  &:hover {
    background-color: #007cfd;
    background: #007cfd;
  }
  &:active {
    bottom: -39.8%;
  }
`;

const filterButtonStyles = css`
  font-size: 0.8rem;
  padding-left: 22px;
  height: 26px;
  padding-right: 22px;
  display: flex;
  text-align: center;
  vertical-align: bottom;
  cursor: pointer;
  color: white;
  background: linear-gradient(to top, #7892c2 5%, #007cfd 100%);
  border-radius: 1rem;
  z-index: 2;
  line-height: initial !important;

  &:hover {
    background-color: #007cfd;
    background: #007cfd;
  }
  &:active {
    bottom: -39.8%;
  }
`;

const cancelButtonStyles = css`
  font-size: 0.8rem;
  padding-left: 22px;
  padding-right: 22px;
  display: flex;
  text-align: center;
  vertical-align: bottom;
  cursor: pointer;
  color: white;
  background: rgba(226, 226, 226, 1);
  background: -moz-linear-gradient(
    top,
    rgba(226, 226, 226, 1) 0%,
    rgba(219, 219, 219, 1) 50%,
    rgba(209, 209, 209, 1) 51%,
    rgba(254, 254, 254, 1) 100%
  );
  background: -webkit-gradient(
    left top,
    left bottom,
    color-stop(0%, rgba(226, 226, 226, 1)),
    color-stop(50%, rgba(219, 219, 219, 1)),
    color-stop(51%, rgba(209, 209, 209, 1)),
    color-stop(100%, rgba(254, 254, 254, 1))
  );
  background: -webkit-linear-gradient(
    top,
    rgba(226, 226, 226, 1) 0%,
    rgba(219, 219, 219, 1) 50%,
    rgba(209, 209, 209, 1) 51%,
    rgba(254, 254, 254, 1) 100%
  );
  background: -o-linear-gradient(
    top,
    rgba(226, 226, 226, 1) 0%,
    rgba(219, 219, 219, 1) 50%,
    rgba(209, 209, 209, 1) 51%,
    rgba(254, 254, 254, 1) 100%
  );
  background: -ms-linear-gradient(
    top,
    rgba(226, 226, 226, 1) 0%,
    rgba(219, 219, 219, 1) 50%,
    rgba(209, 209, 209, 1) 51%,
    rgba(254, 254, 254, 1) 100%
  );
  background: linear-gradient(
    to bottom,
    rgba(226, 226, 226, 1) 0%,
    rgba(219, 219, 219, 1) 50%,
    rgba(209, 209, 209, 1) 51%,
    rgba(254, 254, 254, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#e2e2e2', endColorstr='#fefefe', GradientType=0 );
  border-radius: 1rem;
  z-index: 2;

  &:hover {
    background-color: #e73827;
    background: #e73827;
  }
  &:active {
    bottom: -39.8%;
  }
`;

const blockStyles = css`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  margin: 1.5rem 0;
`;

export { addButtonStyles, cancelButtonStyles, blockStyles, filterButtonStyles };
