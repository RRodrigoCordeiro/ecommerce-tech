/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
/* eslint-disable no-use-before-define */

import { useEffect, useRef, useState } from 'react'
import { BiSolidMicrophone, BiTrash } from 'react-icons/bi'
import { IoMdMic } from 'react-icons/io'

export default function TranscriptButton({ value, setValue }) {
  const transcriptRef = useRef('')
  const btnGravarRef = useRef(null)
  const btnPararRef = useRef(null)

  const [isRec, setIsRec] = useState(false)
  const [isButtonDisabled, setIsButtonDisabled] = useState(false)

  useEffect(() => {
    class SpeechApi {
      constructor() {
        const SpeechToText =
          window.SpeechRecognition || window.webkitSpeechRecognition

        if (!SpeechToText) {
          console.log('Este navegador não é compatível com reconhecimento de voz.')
          return
        }

        this.speechApi = new SpeechToText()
        this.speechApi.continuous = true
        this.speechApi.lang = 'pt-BR'

        this.speechApi.onresult = (e) => {
          const resultIndex = e.resultIndex
          const transcript = e.results[resultIndex][0].transcript

          transcriptRef.current = value + ' ' + transcript
          
          setValue(transcriptRef.current)
        }

        this.speechApi.onaudiostart = () => {
          console.log('Captura de áudio iniciada.')
        }

        this.speechApi.onaudioend = () => {
          console.log('Captura de áudio encerrada.')
          setIsRec(false)
        }
      }

      start() {
        if (this.speechApi) this.speechApi.start()
      }

      stop() {
        if (this.speechApi) this.speechApi.stop()
      }
    }

    const speech = new SpeechApi()

    if (!speech.speechApi) return

    btnGravarRef.current?.addEventListener('click', () => {
      speech.start()
    })

    btnPararRef.current?.addEventListener('click', () => {
      speech.stop()
    })

    return () => {
      speech.stop()
    }
  }, [value, setValue])

  function handleActiveRec() {
    setIsRec(true)
    setIsButtonDisabled(true)
    setTimeout(() => setIsButtonDisabled(false), 1000)
  }

  function handleDisableRec() {
    setIsRec(false)
    setIsButtonDisabled(true)
    setTimeout(() => setIsButtonDisabled(false), 1000)
  }

  return (
    <div className="absolute right-1 top-1/2 transform -translate-y-1/2 text-[#F2F2F2] md:text-black">
      {!isRec && (
        <button
          className="text-black p-3"
          onClick={handleActiveRec}
          ref={btnGravarRef}
          disabled={isButtonDisabled}
          title="Ao retornar a transcrição, alterações manuais serão perdidas."
        >
          <IoMdMic className="h-5 w-5  "/>
        </button>
      )}
      {isRec && (
        <button
          className="rounded-full bg-[#242422] p-3 text-red-600"
          onClick={handleDisableRec}
          ref={btnPararRef}
          disabled={isButtonDisabled}
        >
          <BiSolidMicrophone className="h-5 w-5" />
        </button>
      )}
      {/* <button
        onClick={() => {
          setValue('')
          transcriptRef.current = ''
        }}
        type="button"
        className="text-white"
        title="Limpar transcrição."
      >
        <BiTrash className="h-6 w-6" />
      </button> */}
    </div>
  )
}
