const svg = p => `

`;

export default props => (
  <span dangerouslySetInnerHTML={{ __html: svg(props) }} />
)
  