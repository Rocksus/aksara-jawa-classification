import React from 'react'

class Content extends React.Component {
    render() {
        return (
            <div className="Content-page">
                <div className="Content-section-1">
                    <h1>What is Aksara Jawa?</h1>
                    <p>Aksara Jawa is one of the traditional scripts that was used in the Java region. This script was dominantly used to write Javanese language texts, but it was also adapted by other cultures such as Sundanese, Madura, Sasak, Melayu, and other historical languages like Sansekerta and Kawi. Aksara Jawa was derived from the Brahmi India script through Kawi script and is very well linked to Bali script. Aksara Jawa is used mostly in the 15th century up until mid 20th century right before it’s use was slowly being replaced by latin characters.<br /><br />
    Right now it is still being taught in DI Yogyakarta, Middle Java, and Eastern Java but with limited use in day-to-day basis.</p>
                </div>
                <div className="Content-section-2">
                    <h1>How was it Used in Real Life?</h1>
                    <p>Aksara Jawa is a abugida writing system that consists of around 20-33 base scripts, depending on the language. Every consonant represents a vowel with an inherent vocal /a/ or /ɔ/ that can be altered using different diactritics. It is read from left to right and written without any spaces (scriptio continua).</p>
                    <img className="Example-img" src="example.jpg" alt="example"></img>
                    <p>The example above means the union of the essence from the giver of life (divine) with the ones given life (beings). The meaning of padha is “equal” or in accordance, matching “a single mind that is reflected in their actions based on nobility and virtue. Jaya is “winning” or “superior” triumphantly, not just winning with no sportsmanship.</p>
                </div>
                <div className="Content-section-3">
                    <div>
                        <h1>What can we do with Machine Learning?</h1>
                    </div>
                    <div className="Section-container-1">
                        <div className="Info-container">
                            <h2>Educate & Preserve</h2>
                            <p>We can use machine learning to leverage the teachers educating these ancient scripts to their students. Our implementation can help people write & understand each scripts better.</p>
                        </div>
                    </div>
                    <div className="Section-container-2">
                        <div className="Info-container">
                            <h2>Digitalize History</h2>
                            <p>Our machine learning can be used as an Optical Character Recognition (OCR) to translate written text images into digitalized versions of it.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Content;