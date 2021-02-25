const svg = p => `
<svg width="211" height="86" viewBox="0 0 211 86" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M66.3126 2.03155C58.1582 2.51758 51.3815 3.86921 43.4651 5.82367C38.6718 7.3474 34.2326 8.84301 29.5245 10.6581C25.5299 12.1981 23.144 14.2724 19.1554 15.8221C15.8955 17.0887 13.3397 19.3276 10.3973 21.2336C5.11933 24.6525 2.67399 30.922 2.10846 36.7467C1.35999 44.4556 2.35275 52.7063 8.16969 58.4849C14.4303 64.7041 21.7907 68.8086 29.8071 72.6311C34.597 74.9151 39.9357 75.688 45.0724 76.9458C51.0874 78.4186 57.4315 78.7778 63.5669 79.6137C79.9444 81.8449 96.5909 82.9595 113.11 83.7472C125.13 84.3204 137.386 84.1663 149.408 83.846C156.454 83.6583 163.363 82.7227 170.321 81.7051C176.02 80.8715 181.888 79.9797 187.434 78.4444C195.279 76.2724 204.677 70.6502 208.018 63.1948C209.8 59.2158 209.574 54.9201 209.503 50.6789C209.418 45.6099 207.911 40.0031 206.204 35.2152C204.803 31.2848 202.779 27.3794 200.16 24.0497C196.264 19.0956 189.796 15.3117 184.153 12.456C180.367 10.5404 176.472 8.77237 172.514 7.2026C169.031 5.82164 165.339 5.28056 161.669 4.53473C150.998 2.36596 140.031 1.55501 129.135 1.50457C115.229 1.44019 101.36 1.42007 87.4492 1.50457C80.4324 1.54719 73.3176 1.61403 66.3126 2.03155Z" fill="white" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

`;

export default props => (
  <span dangerouslySetInnerHTML={{ __html: svg(props) }} />
)
