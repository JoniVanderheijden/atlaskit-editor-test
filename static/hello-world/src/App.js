import React, { useEffect, useState } from 'react';
import { invoke } from '@forge/bridge';
import {Editor} from "@atlaskit/editor-core";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    invoke('getText', { example: 'my-invoke-variable' }).then(setData);
  }, []);

  return (
    <div>
      {data ? data : 'Loading...'}
      <Editor/>
    </div>
  );
}

export default App;
