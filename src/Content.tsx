import React from 'react';

import { useTranslation, initReactI18next ,Trans} from "react-i18next";


export interface ContentProps {
    
}
 
const Content: React.FC<ContentProps> = () => {

  const [value,setValue] = React.useState<string | number>('');


    const { t,i18n } = useTranslation();
    const onClick = ()=>{
     i18n.changeLanguage(i18n.language === 'en' ? 'hu' : 'en');
    };


    const onChange= (e:any)=>{
      const intValue = parseInt(e.target.value); 
       setValue( intValue ? intValue : '');
    };

    return (   
       <div >
           <h3>
            {t('sayHi',{count: value as number})}
          </h3>
          <h3>  {t('sayHi',{count: value as number,context:'elso'})}</h3>
          <h3>  {t('sentence3',{ text: 'haliho' })}</h3>
          <Trans  i18nKey="secondSentence">Halihó ez a <strong>második</strong> mondat</Trans>
          <br/>
          <button onClick={onClick}>Váltás</button>
           <br/>
           <input  type='text' onChange={onChange} value={value}/>
        </div>);
}
 
export default Content;