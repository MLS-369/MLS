import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/BlogPost.css";
import { useTheme } from "./ThemeContext";
import { GraduationCap, MapPin } from "lucide-react";

const BlogPost = () => {
    const navigate = useNavigate();
    const { isDarkTheme } = useTheme();
    // const { id } = useParams();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Actual Blog Data
    const blogData = {
        title: "Cybercrime Without Borders: Navigating International Legal Conflicts",
        date: "January 11th, 2026",
        readTime: "12 min read",
        content: `
            <h3>Introduction: Understanding Cyberspace</h3>
            <p>Cyberspace is a virtual, non-physical environment of interconnected computer networks that provides the infrastructure and resources needed for global online communication. It includes both the technical backbone of the internet and the digital platforms and virtual spaces where people interact, trade, and share information.</p>
            <p>The term “cyberspace” traces back to the concept of cybernetics, introduced by Norbert Wiener to describe control and communication in electronic systems, and was popularised in the 1980s by cyberpunk author William Gibson in works such as “Burning Chrome” and Neuromancer. Today, cyberspace is understood as a layered ecosystem consisting of:</p>
            <ul>
                <li><strong>Core infrastructure:</strong> internet backbones, telecom and satellite systems, undersea cables, wireless networks, servers, routers, data centres, and cloud infrastructure that store, process, and route data.</li>
                <li><strong>Devices and endpoints:</strong> computers, smartphones, tablets, IoT devices, and industrial control systems linked to critical infrastructure like power grids, transport and healthcare.</li>
                <li><strong>Digital platforms and services:</strong> websites, social media, email, messaging apps, streaming services, online games, e commerce platforms, online banking, and e governance portals.</li>
                <li><strong>Data and digital identities:</strong> personal and financial data, corporate and state information, and the digital identities and cryptographic systems that control access to online services.</li>
            </ul>
            <p>In cyber law and security debates, “cyberspace” usually refers to this entire ecosystem where digital interactions, economic activity, governance, and cybercrime all take place.</p>
            <p>Cyberspace is therefore not just a technical construct but a shared global space where individuals, businesses, and governments increasingly live out their economic, social, and political lives. The same features that make communication and innovation seamless—speed, reach, and anonymity—also create ideal conditions for cybercrime to flourish across borders.</p>
            
            <h3>What Is Cybercrime?</h3>
            <p>Cybercrime refers to illegal activities carried out using computers, digital devices, or networks, either as the main target of the offence or as the primary tool to commit it. From an international and Indian perspective, cybercrime is often grouped into three broad categories:</p>
            <ul>
                <li><strong>Cyber-dependent crimes:</strong> offences that can only be committed using ICT systems, such as unauthorised access (hacking), malware distribution, ransomware, and denial of service attacks.</li>
                <li><strong>Cyber-enabled crimes:</strong> traditional crimes—like fraud, cheating, extortion, money laundering, or harassment—that become easier, faster, or more damaging through digital technologies.</li>
                <li><strong>Content-related offences and online exploitation:</strong> crimes involving illegal or harmful online content, including child sexual abuse material and terrorist propaganda.</li>
            </ul>

            <h3>Types of Cybercrime</h3>
            <p>1. <strong>Cyber-dependent crimes:</strong> These offences exist only because of computers and networks. In India, such conduct is primarily addressed under sections 43, 66 and related provisions of the Information Technology Act, 2000 (IT Act).</p>
            <p>2. <strong>Cyber-enabled crimes:</strong> Here, traditional crimes are amplified by digital tools and platforms. These offences in India are prosecuted through a combination of the IT Act and provisions of the Indian Penal Code (IPC) on cheating, criminal intimidation, and extortion.</p>
            <p>3. <strong>Content-related and exploitation offences:</strong> These focus on harmful material and exploitative conduct online. India addresses such conduct through the IT Act, the POCSO Act, IPC provisions, and the IT Rules, 2021.</p>
            <p>4. <strong>Attacks on critical infrastructure and national security:</strong> Some of the most serious cybercrimes target essential services and state interests, often treated as threats to national security.</p>
            
            <h3>The Jurisdictional Conflict</h3>
            <p>Evidence—such as server logs, cloud backups, account records, and cryptocurrency transaction data—is often stored on foreign servers under the control of multinational companies. In India, investigators frequently need data from service providers based in the United States or Europe, which requires navigating foreign privacy laws and mutual legal assistance processes. This mismatch between the borderless nature of the crime and the territorial reach of law lies at the heart of “cybercrime without borders.”</p>
            
            <h3>Jurisdiction: Who Can Prosecute?</h3>
            <p>One of the hardest questions in cross border cybercrime is: which country has the right to investigate and prosecute? Traditional criminal law is based on territoriality—the place of commission of the offence, the place where the consequence occurs, or the nationality of the accused or victim. Many legal systems, including India, now assert jurisdiction where:</p>
            <ul>
                <li>The computer system or data targeted is located in the territory.</li>
                <li>The harmful effects are felt in the territory, even if the act originated abroad.</li>
                <li>The victim or accused is a national or resident.</li>
            </ul>
            
            <h3>Indian Legal Framework and Practice</h3>
            <p>From an Indian perspective, the main pillars of the cybercrime framework include the Information Technology Act, 2000 and amendments, the Indian Penal Code (and successor codes), and special laws like the POCSO Act. Regulatory measures from CERT-In and RBI also play a crucial role in incident reporting and cybersecurity norms.</p>

            <h3>Conclusion</h3>
            <p>A borderless digital world has made cybercrime a shared global problem, but the laws that respond to it still operate within national boundaries. For India, which sits at the heart of a rapidly digitising economy, the stakes are especially high: protecting citizens, critical infrastructure and national security now depends as much on effective cross border cooperation as on robust domestic laws. Moving from borders to bridges will require India and its partners to gradually harmonise key cybercrime norms, invest in operational cooperation, and embed firm human rights safeguards.</p>
        `,
        author: {
            name: "Shivani Patel",
            photo: "/shivani.jpg", // Using the available image per previous instructions
            profession: "4th Year Law Student",
            workplace: "Bharati Vidyapeeth, New Law College",
            bio: "Interested and passionate about cyber law and data privacy law."
        }
    };

    return (
        <div className={`blog-post-page ${isDarkTheme ? "dark-theme" : "light-theme"}`}>
            <div className="blog-post-container">
                <header className="blog-post-header">
                    <button className="back-link" onClick={() => navigate("/blogs")}>
                        Back to Blogs
                    </button>
                    <h1 className="blog-title">{blogData.title}</h1>
                    <div className="blog-meta">
                        <span>Published on {blogData.date}</span>
                        <span className="dot"></span>
                        <span>{blogData.readTime}</span>
                    </div>
                </header>

                <div className="blog-main-content">
                    {/* 80% Width Content Area */}
                    <article className="blog-article" dangerouslySetInnerHTML={{ __html: blogData.content }}>
                    </article>

                    {/* 20% Width Author Sidebar */}
                    <aside className="blog-author-sidebar">
                        <div className="author-card">
                            <div className="author-photo-wrapper">
                                <img src={blogData.author.photo} alt={blogData.author.name} className="author-photo" />
                            </div>
                            <div className="author-info">
                                <h2 className="author-name">{blogData.author.name}</h2>
                                <div className="author-detail-item">
                                    <span className="icon">
                                        <GraduationCap size={18} />
                                    </span>
                                    <span className="text">{blogData.author.profession}</span>
                                </div>
                                <div className="author-detail-item">
                                    <span className="icon"><MapPin size={18} /></span>
                                    <span className="text">{blogData.author.workplace}</span>
                                </div>
                                <p className="author-bio">{blogData.author.bio}</p>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
};

export default BlogPost;
