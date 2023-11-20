'use client'
import axios from "axios";
import {useEffect, useState} from "react";


export default function FilePage({params}) {
    const filename = params.filename;
    const [isTranscribing, setIsTranscribing] = useState(false);


    useEffect(() => {
        getTranscription();
    }, [filename]);

    function getTranscription() {
        setIsFetchingInfo(true);
        axios.get('/api/transcribe?filename='+filename).then(response => {
          setIsFetchingInfo(false);
          const status = response.data?.status;
          const transcription = response.data?.transcription;
          if (status === 'IN_PROGRESS') {
            setIsTranscribing(true);
            setTimeout(getTranscription, 3000);
          } else {
            setIsTranscribing(false);
    
            setAwsTranscriptionItems(
              clearTranscriptionItems(transcription.results.items)
            );
          }
        });
      }
    
      if (isTranscribing) {
        return (
          <div>Transcribing your video...</div>
        );
      }
    
      if (isFetchingInfo) {
        return (
          <div>Fetching information...</div>
        );
      }
    
    return (
        <div>{filename}</div>
    )
}