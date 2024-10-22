import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import SideMenu from "./SideMenu";
import Linkify from "react-linkify";

function App() {
  const predefinedNotes = [
    {
      title: "About Me",
      content: `I am Joanna Lynn Yosdorus, a passionate Computer Science undergraduate at Bina Nusantara University with a strong interest in front-end and web development. I have experience working with HTML, CSS, JavaScript, React.js, Laravel, PHP, MySQL, ASP.NET, C#, Java, C, Python, and Git practices. In addition to my technical expertise, I am capable of effectively self-managing independent projects and collaborating efficiently in team settings. Currently, I am seeking an internship in front-end or web development, where I can apply my skills, gain hands-on industry experience, and contribute to real-world projects.`,
    },
    {
      title: "What is keepPortfolio?",
      content: `keepPortfolio is a personal portfolio and note-taking platform that showcases my achievements, projects, and milestones while also enabling visitors the ability to create, organize, and manage their own notes directly on the site.

It’s a blend of a portfolio display and an interactive space for users to keep their thoughts, tasks, and ideas all in one place.

This app aims to bridge the gap between showcasing personal work and encouraging others to document their journey, fostering a collaborative and organized space for everyone.

keepPortfolio leverages React.js to build an interactive, component-based user interface, ensuring a seamless user experience. The layout is crafted using CSS Flexbox and Grid, offering a modern, responsive design that adapts well to various screen sizes, and react-icons is also used to provide clear and intuitive iconography. 

Additionally, the app utilizes LocalStorage to store user-generated notes, enabling data persistence without the need for a backend, ensuring that notes remain accessible even after refreshing or closing the browser.`,
    },
    {
      title: "What is Used To Create keepPortfolio?",
      content: `keepPortfolio leverages React.js to build an interactive, component-based user interface, ensuring a seamless user experience. The layout is crafted using CSS Flexbox and Grid, offering a modern, responsive design that adapts well to various screen sizes, and react-icons is also used to provide clear and intuitive iconography. 

Additionally, the app utilizes visitor's local storage to store user-generated notes, enabling data persistence without the need for a backend, ensuring that notes remain accessible even after refreshing or closing the browser.`,
    },
    {
      title: "What Can I Do in keepPortfolio?",
      content: `1. Explore About Me and My Projects
Visitors can explore informations about myself and a variety of projects with detailed descriptions, links to reports, and media showcasing my work.
      
2. Create and Manage Personal Notes
Visitors can create their own notes with custom titles, descriptions, and images, making the app a flexible tool for brainstorming and task management. Visitors can also delete their notes once they don't need it anymore (but you cannot delete my notes, it will always reappear once you reload).
      
3. Expandable and Interactive Notes
Visitors can click on any note to open a detailed view, with clickable links and images for easy access to important information.
      
4. Contact Me Side Menu
Visitors can contact me easily by accessing the collapsible side menu.
      
5. Save Notes
All notes are saved locally in the browser, ensuring they remain available even after refreshing or closing the browser.
      
6. Responsive Design
The interface is optimized for both desktop and mobile devices, offering a smooth user experience on any screen size.`,
    },
    {
      title: "WatchOver",
      content: `Year Accomplished: 2024
Role or Position: Product Owner, Product Designer, UI/UX Designer

Publication Link:
1. Figma
https://www.figma.com/design/FyXxLTkombchRlLX2vrak3/Software-Engineering?node-id=0-1&t=Qz6YDZUEufe80Ysm-1

2. Project Report
https://drive.google.com/file/d/1pAzF9B7PeV8kPLxpJvXnVJoypnCJkW6U/view?usp=sharing

3. GitHub
https://github.com/DarrenAnthonyBeltham/WatchOver

"WatchOver" is a web-based application designed to combat the spread of hoaxes and misinformation online. With the increasing prevalence of fake news, it provides a tool to verify information and deliver accurate updates on current events. According to a 2021 survey by KIC and KOMINFO, 11.9% of respondents admitted to spreading hoaxes, while 30% to 60% of Indonesians are exposed to misinformation online, yet only 21% to 36% can identify it (Jayani, 2022). Inspired by platforms like Brainly, Quora, Reddit, and Kompas.com, "WatchOver" aims to address the gaps in these platforms by focusing specifically on countering hoaxes, offering verified and unverified news distinctions to help users avoid misleading information.`,
      image: "/images/WatchOver.png",
    },
    {
      title: "Zero Waste",
      content: `Year Accomplished: 2024
Role or Position: Product Owner, Product Designer, UI/UX Designer

Publication Link:
1. Figma
https://www.figma.com/design/49Ad6GY7CJ2QUbLCJK634p/ZeroWaste?node-id=0-1&t=sHXgqxLiBXAM8Mz3-1

2. Project Report
https://docs.google.com/document/d/1UTfc6lLA2d9BZjjLjCuPyzLnjaEZ9SETOhpgkdS4h68/edit?usp=sharing

“Zero Waste” aims to address Indonesia's pressing matter regarding waste management issues by providing a user-friendly platform for users to sell their trash and scraps to various recycle points in the app. These recycle points can accept several types of waste; however, users must categorize their waste correctly to get a high price for it. Once sold, the recycle point processes the trash, sorts it, and sells it again to users who require processed waste or recycled products, thereby fostering a circular economy. This innovative solution not only facilitates efficient waste management but also raises environmental awareness, promoting sustainable living practices by incentivizing proper waste disposal and recycling, and increasing community participation in environmental sustainability.

This project has been submitted as part of an internal selection process for the Eureeka organization at BINUS University to participate in GEMASTIK and is one of my best works yet in terms of UI/UX design for mobile applications. There were some challenges faced in the making of this project such as a tight deadline and the lack of technical expertise.`,
      image: "/images/ZeroWaste.png",
    },
    {
      title: "e-ramen",
      content: `Year Accomplished: 2023
Role or Position: Product Owner, Product Designer, UI/UX Designer, Front-End Engineer
      
Publication Link:
1. Project Report
https://drive.google.com/file/d/1xO4cLbt1RQN0a9eG8pzrezhKUc813jST/view?usp=sharing

2. Website Demo
https://e-ramen.vercel.app/

3. Demo Video
https://drive.google.com/file/d/1vOZSBpFXCJjeo7TXArQW4ch-TYRNQL0H/view?usp=sharing

4. Figma
https://www.figma.com/file/ZrHJv3IOHsmsNdcPSfbHvy/Joanna-Lynn-Yosdorus---Project-HCI?type=design&node-id=0%3A1&t=inTwtM6LKqbjKN3w-1

“e-ramen” is a website that is developed to showcase the extensive menu of its dining establishment. This website aims to address the challenge of presenting diverse culinary offerings in an engaging and accessible manner. Through comprehensive research into user experience and design principles, the website features an intuitive layout that highlights each dish with vivid images and detailed descriptions, ensuring customers can easily navigate and explore the menu easily. This solution effectively solves the problem of menu presentation by providing a visually appealing and informative interface, enhancing the overall dining experience and encouraging informed choices, making e-Ramen's offerings more accessible and enticing to potential patrons.

This project was developed as an individual project for the Human and Computer Interaction lab class at BINUS University. There were some challenges faced in the making of this project such as a tight deadline and the lack of technical expertise, since this is my first project to use all HTML, CSS, and JS at once.`,
      image: "/images/e-ramen.png",
    },
    {
      title: "calm.",
      content: `Year Accomplished: 2023
Role or Position: Product Owner, Product Designer, UI/UX Designer

Publication Link:
1. Figma
https://www.figma.com/design/yiOxuvu9S6Bkt7DZ2xBULV/UTS-Joanna-Lynn-Yosdorus?node-id=0-1&t=t4Msro4GavtbbBuA-1

2. Project Report
https://drive.google.com/file/d/1IvyylTnv5G_TnGjz5_QHiUut6g-8X8QY/view?usp=sharing

3. Demo Video
https://drive.google.com/file/d/1jlJ-Ew8OqsgOf3Gt-z-ETVvhJFtugEoH/view?usp=drive_link

"calm." is an online health consultation website designed to provide users with convenient access to psychiatrists and specialists both online and offline. Addressing the challenge of limited accessibility to mental health professionals, "calm." offers a seamless user experience informed by comprehensive research into patient needs and digital health solutions. Users can easily register, log in, and make payments through the website, ensuring a straightforward and secure process. This app effectively solves the problem of mental health service accessibility by integrating intuitive features and secure transaction methods, enhancing the overall experience and encouraging more people to seek the help they need, thereby promoting better mental health outcomes.

This project is a concept that has been submitted as part of my midterm exam for Human and Computer Interaction class at BINUS University. This is one of my early works yet in terms of UI/UX design for website applications. There were some challenges faced in the making of this project such as the lack of technical expertise and time.`,
      image: "/images/calm.png",
    },
    {
      title: "cookIT",
      content: `Year Accomplished: 2023
Role or Position: Product Owner, Product Designer, UI/UX Designer
      
Publication Link:
1. Figma
https://www.figma.com/design/21McPqQnV1obe7pkMiK73a/Artificial-Intelligence?node-id=0-1&t=WCuWnzsV2GM88t1U-1
  
2. Project Report
https://drive.google.com/file/d/16_VlzwrZ58RtkzsQo0Xv99VKzxsEVZUV/view?usp=sharing
  
3. Video Demo
https://drive.google.com/file/d/1vhJguNmqs2cEMfaiDruB1Lz1BgP0hvBp/view?usp=drive_link
  
”CookIT” is a mobile app designed to enhance culinary creativity by allowing users to take pictures of unknown ingredients, which are then identified and added to their personal inventory within the app. By conducting comprehensive research into user needs and leveraging advanced image recognition technology, “CookIT” addresses the challenge of ingredient identification and management. Users can search for recipes based on the ingredients they have on hand, making meal preparation more efficient and reducing food waste. Additionally, the app allows users to favorite recipes, ensuring they can easily access their preferred dishes. This innovative solution not only simplifies the cooking process but also empowers users to explore new recipes and make the most of their available ingredients, thereby providing a practical and enjoyable cooking experience.
  
This project concept was submitted as part of my final project for Artificial Intelligence class at BINUS University. The development faced several challenges, including a tight deadline and a lack of technical expertise in Artificial Intelligence techniques.`,
      image: "/images/cookIT.png",
    },
    {
      title: "Pick a Color",
      content: `Year Accomplished: 2020
Role or Position: Product Owner, Product Designer, UI/UX Designer, Front-End Engineer
            
Publication Link:
1. .aia File
https://drive.google.com/file/d/14e-jJ3ndB0BROe-haszyf-L-YQ_9FyUE/view?usp=sharing

2. Designer and Blocks
https://drive.google.com/file/d/1GeQ3DsCLKvVv9hM7KxNnVcbVEx8h3y_d/view?usp=sharing

3. Project Report
https://docs.google.com/document/d/1y-5lqQCPlR5sjMgkEsVoSfRH3DXz7PBfSfbmjSPxHUo/edit?usp=sharing

4. Demo Video
https://drive.google.com/file/d/1ded0ZPWHhBjh5B3HTqR-0dfS5a153wqo/view?usp=sharing
      
"Pick a Color" is a mobile application designed to help users identify colors from images by either uploading a picture or taking a photo. By addressing the common challenge of accurately determining color values, the app allows users to hover over any part of the image with a cursor to reveal the RGB values of the selected color. Extensive research into color theory and user interface design informed the app's development, ensuring it provides a seamless and intuitive user experience. Additionally, users can access a dedicated page displaying the selected color in detail, offering a comprehensive understanding of its properties. This innovative solution effectively solves the problem of color identification, making it an invaluable tool for designers, artists, and anyone needing precise color information.

This project concept was made with MIT App Inventor and was submitted as part of my final project for Artificial Intelligence class at BINUS University. The development faced several challenges, such as the lack of technical expertise to know how to make my application recognize the color where the cursor hovers.`,
      image: "/images/PickaColor.png",
    },
  ];

  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem("notes");
    const localNotes = savedNotes ? JSON.parse(savedNotes) : [];
    return [...predefinedNotes, ...localNotes];
  });

  const [isExpanded, setIsExpanded] = useState(false);
  const [note, setNote] = useState({ title: "", content: "", image: "" });
  const [modalNote, setModalNote] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Controls open/close on hover
  const [isPinned, setIsPinned] = useState(false); // Tracks pin state

  useEffect(() => {
    localStorage.setItem(
      "notes",
      JSON.stringify(notes.slice(predefinedNotes.length))
    );
  }, [notes]);

  function addNote(newNote) {
    if (newNote.title || newNote.content || newNote.image) {
      setNotes((prevNotes) => [...prevNotes, newNote]);
    }
    setNote({ title: "", content: "", image: "" });
    setIsExpanded(false);
  }

  function deleteNote(id) {
    setNotes((prevNotes) =>
      prevNotes.filter((noteItem, index) => index !== id)
    );
  }

  function expandForm() {
    setIsExpanded(true);
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (!event.target.closest(".create-note") && isExpanded) {
        if (note.title || note.content || note.image) {
          addNote(note);
        } else {
          setIsExpanded(false);
        }
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isExpanded, note]);

  function openModal(note) {
    setModalNote(note);
  }

  function closeModal() {
    setModalNote(null);
  }

  function togglePin() {
    setIsPinned((prev) => !prev); // Toggle pin state
    setIsMenuOpen((prev) => !prev || !isPinned); // Update menu open state
  }

  return (
    <div>
      <Header togglePin={togglePin} />
      <div className="app-container">
        <SideMenu
          isOpen={isMenuOpen}
          isPinned={isPinned}
          setIsOpen={setIsMenuOpen}
        />
        <div className="content-container">
          <CreateArea
            note={note}
            setNote={setNote}
            onAdd={addNote}
            onExpand={expandForm}
            isExpanded={isExpanded}
          />
          <div className="notes-container">
            {notes.length === 0 && <p>No notes available</p>}
            {notes.map((noteItem, index) => (
              <Note
                key={index}
                id={index}
                title={noteItem.title}
                content={noteItem.content}
                image={noteItem.image}
                onDelete={deleteNote}
                onReadMore={() => openModal(noteItem)}
              />
            ))}
          </div>
        </div>
      </div>
      {modalNote && (
        <div className="modal">
          <div className="modal-content">
            <div className="modal-header">
              <h1>{modalNote.title || "Untitled"}</h1>
              <button className="close-button" onClick={closeModal}>
                &times;
              </button>
            </div>
            <div className="modal-body">
              <Linkify>
                <p>{modalNote.content}</p>
              </Linkify>
              {modalNote.image && (
                <img
                  src={modalNote.image}
                  alt="Note"
                  className="note-image"
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "contain",
                  }}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;