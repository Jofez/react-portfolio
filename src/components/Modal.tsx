import { useEffect, useState } from 'react';
import { ReleaseNotesProps } from '../components/Types';
import i18next, { languageResources } from '../i18n/i18next';
import { useTranslation } from 'react-i18next';

export default function ModalWithoutPortal() {
    const [showModal, setShowModal] = useState(false);
    const {t, i18n} = useTranslation();
    const [releaseNotes, setReleaseNotes] = useState<ReleaseNotesProps[]>([]);


    const updateReleaseNotes = () => {
        setReleaseNotes([
            {
                id: "1",
                version: "1.1.0",
                date: "2025-01-07",
                features: [{
                    id: "f11",
                    description: t("modal-1-feature-1-desc"),
                },
                {
                    id: "f12",
                    description: t("modal-1-feature-2-desc")
                },]
            },
            {
                id: "2",
                version: "1.2.0",
                date: "2025-01-31",
                features: [{
                    id: "f21",
                    description: t("modal-2-feature-1-desc")
                }]
            },
            {
                id: "3",
                version: "1.3.0",
                date: "2025-03-26",
                features: [{
                    id: "f31",
                    description: t("modal-3-feature-1-desc")
                },
                {
                    id: "f32",
                    description: t("modal-3-feature-2-desc")
                },]
            }
        ])
    }
    

    const [title, setTitle] = useState("Release Notes");
    const [version, setVersion] = useState("Version:");
    const [newFeatures, setNewFeatures] = useState(t("modal-new-features"));
    const [date, setDate] = useState(t("modal-date"));
    const [close, setClose] = useState(t("modal-button-close"));

    useEffect(() => {
        updateReleaseNotes();

        const handleLanguageChange = () => {
            updateReleaseNotes();
            setNewFeatures(t("modal-new-features"))
            setDate(t("modal-date"));
            setClose(t("modal-button-close"));
        } 
        i18next.on("languageChanged", handleLanguageChange); // Registrera lyssnaren för språkändring
        
            // Rensa lyssnaren vid avmontering
        return () => {
            i18next.off("languageChanged", handleLanguageChange);
        };

    }, [i18next, t])

  return (
    <>
      <button
        className='text-custom-p-fs border-[2px] border-border rounded-[3px] mt-0 mb-2 mx-2 y-1 px-2 hover:bg-hover-purple focus:bg-hover-purple hover:text-white focus:text-white transition duration-500 mr-2'
        onClick={() => setShowModal(!showModal)}
    >
        {t("modal-button")}
    </button>
      {showModal && (
        <div className="modal-container flex items-baseline border-border justify-center z-50 text-text-inverted">
          <div className="shadow-md modal absolute z-50 border-2 rounded-[3px] bg-primary-text w-80 h-fit max-w-md flex flex-col items-center text-left px-4 "
          >
            <h3 className='font-bold text-custom-p-fs'>{title}</h3>
                {releaseNotes.map(note => 
                <div className='mb-2'>
                   <p className='text-custom-p14-fs font-bold'>{version} {note.version}</p>
                   <p className='text-custom-p12-fs'>{date} {note.date}</p>
                   <p className='text-center text-custom-p14-fs'>{newFeatures}</p>
                  
                    {note.features.map((feature) => (
                    <ul className='text-custom-p12-fs list-square'>
                        <li key={feature.id}>{feature.description}</li>
                   </ul>
                    ))}
                </div>
                )}
            <button
                className='bg-primary-text text-custom-p-fs border-[2px] border-background rounded-[3px] mt-1 mb-2 mx-2 y-1 px-2 hover:bg-hover-purple focus:bg-hover-purple hover:text-white  transition duration-500 mr-2'
                onClick={() => setShowModal(false)}>{close}</button>
          </div>
          <div className="modal-backdrop fixed inset-0 bg-black bg-opacity-50" onClick={() => setShowModal(false)}></div>
        </div>
      )}
    </>
  );
}