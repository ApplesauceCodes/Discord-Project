import './styles/globals.css';
import '@fontsource/averia-serif-libre';
import '@fontsource-variable/inter';
import { NotePage } from './components/NotePage';

const loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu odio at nunc fringilla suscipit. Ut consectetur quam eget lacus malesuada placerat. Sed dignissim, diam sit amet consectetur iaculis, enim diam luctus orci, vitae congue eros purus in velit. Maecenas ac tortor purus. Proin id aliquam dui. Donec sit amet lectus sed lectus condimentum iaculis sed eu quam. Duis sed aliquet erat. Mauris imperdiet ex sed varius lobortis. Aliquam id elit enim. Nunc aliquet, risus sed euismod imperdiet, sapien lacus malesuada nulla, et porttitor odio diam ac metus. Duis vestibulum enim eget purus placerat pretium. In mattis nibh egestas, aliquet risus eu, suscipit arcu. Fusce consectetur augue nibh, tempus pellentesque turpis imperdiet ut. Vestibulum fringilla non urna sed aliquet. Nulla facilisi.
\n\n\tUt sollicitudin suscipit luctus. Morbi ac mauris sit amet enim laoreet interdum. Phasellus tellus est, tincidunt sed rutrum convallis, cursus ac dui. Duis blandit vestibulum bibendum. Morbi convallis orci nec erat sodales bibendum. Aenean justo tellus, sodales a elementum sed, dictum vel odio. Maecenas blandit eleifend nisi in mattis. Aenean id varius enim. Ut magna ligula, posuere a arcu ut, condimentum ornare libero. Duis ut ante ut nulla eleifend commodo. Integer condimentum, risus sit amet suscipit vehicula, ante nulla tincidunt urna, vel ullamcorper velit ipsum eu arcu. Pellentesque tincidunt arcu vel lacinia tristique. Duis auctor arcu tortor, vitae iaculis ipsum varius id. Integer porttitor sodales leo id vestibulum. Aliquam at aliquet nibh.`
const fakePath = "notes/topicname/note-title-here"

function App() {
  return (
    <>
      <NotePage title="Note Title Here" content={loremIpsum} path={fakePath} />
    </>
  )
}

export default App
