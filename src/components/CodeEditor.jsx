'use client'

import { Resizable } from 're-resizable'

import AceEditor from 'react-ace'

export default function CodeEditor () {
  return (
    <>
      <Resizable
        minHeight={466}
        minWidth={510}
        maxWidth={1000}
      >
        <div>
          <AceEditor />
        </div>
      </Resizable>
    </>
  )
}
