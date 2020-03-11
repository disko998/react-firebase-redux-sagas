const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
    const rec = new MediaRecorder(stream)

    rec.ondataavailable = e => {
        console.log('ondataavailable', e)
        const audioChunk = [e.data]
        if (rec.state === 'inactive') {
            let blob = new Blob(audioChunk, { type: 'audio/mpeg-3' })
            const src = URL.createObjectURL(blob)
            setAudio(src)
            console.log(src)
        }
    }

    console.log('Recorder', rec)

    setRecord(rec)
}
