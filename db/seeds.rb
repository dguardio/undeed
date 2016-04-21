User.destroy_all
lei = User.create(email: "zhuleijia@zhuleijia.com", password: "53080949", real_name: "Lei Corp")
guest = User.create(email: "guest@guest.com", password: "guestguest", real_name:"guest")
usgov = User.create(email: "usgov@usgov.gov", password: "usgovernment", real_name:"U.S. Government")
lucasfilm = User.create(email: "lucus@lucus.gov", password: "lucasfilm", real_name:"Lucas Film")
walmart = User.create(email: "walmart@walmart.com", password: "walmartwalmart", real_name:"Walmart")
policedept = User.create(email: "wawerwert@walmart.com", password: "wawerwemart", real_name:"San Fransico Police Department")
myp = User.create(email: "NewYork-Presbyterian", password: "NewYork-Presbyterian", real_name:"NewYork-Presbyterian")

Location.destroy_all
new_york = Location.create(city: "New York")
new_port = Location.create(city: "New Port")
washington = Location.create(city: "Washington")
chicago = Location.create(city: "Chicago")
seattle = Location.create(city: "Seattle")
austin = Location.create(city: "Austin")
san_francisco = Location.create(city: "San Francisco")
los_angeles = Location.create(city: "Los Angeles")

Job.destroy_all
job1 = Job.create(
	title: "Engineer",
	jobtype:	"full_time",
	salary:	99999,
	location_id: new_york.id,
	description: "Determines engineering requirements by conducting inspections and analytical tests; analyzing and synthesizing data; maintaining control charts; determining root causes; preparing bid specifications.\nResolves engineering problems by collecting and analyzing information; researching, analyzing, adapting, and modifying engineering techniques; recommending solutions; preparing drawings, schematics, and diagrams; evaluating components, materials, and suppliers; resolving design integration issues; developing specifications and safety standards; performing installations.\nVerifies engineering applications by conducting tests and inspections; building and analyzing models and simulations; conducting laboratory experiments and measurements.\nMaintains project team accomplishments by communicating essential information; coordinating actions; obtaining expert input; reviewing open issues and action items; contributing information to team meetings and reports; escalating project completion impediments.\nMeets cost standards by preparing cost-benefit analyses; tracking and reporting expenses.\nComplies with codes and regulations by complying with requirements; preparing permit applications, plans, and compliance reports.\nPrepares guidelines by describing operational and testing methods and procedures.\nMaintains and improves quality results by completing quality assurance tests; following standards; studying, evaluating, and re-designing processes; implementing changes.\nEnsures operation of analytical equipment by calibrating equipment; completing preventive maintenance requirements; following manufacturer's instructions; troubleshooting malfunctions; calling for repairs; maintaining equipment inventories; evaluating new equipment and techniques.\nKeeps supplies ready by inventorying stock; placing orders; verifying receipt.\nPrepares engineering reports by collecting, analyzing, and summarizing data and trends; entering data and generating reports and presentations; performing calculations.\nUpdates job knowledge by tracking and understanding emerging engineering practices; participating in educational opportunities and professional organizations; reading professional publications; maintaining personal networks.\nEnhances engineering and organization reputation by accepting ownership for accomplishing new and different requests; exploring opportunities to add value to job accomplishments.",
	employer_id: guest.id,
	status: true
	)
job2 = Job.create(
	title: "Teacher",
	jobtype:	"full_time",
	salary:	900000,
	location_id: new_york.id,
	description: "High school teachers work for schools that enroll students from grades 9-12. They typically instruct students on a single subject, such as English, math, science, history, language or art. To do so, they must plan curricula, which may cover basic topics in algebra to advanced information on psychology.\n
	High school teachers can be influential in students' lives, since students will apply what they learn to their future endeavors. Though teaching can be rewarding, high school teachers may have challenging jobs when dealing with unmotivated or disruptive students. Stress can occur when facilities aren't up to standards, workloads become difficult to manage and teachers work more than 40 hours per week.\nAspiring public high school teachers must obtain a bachelor's degree; although private high school teachers are not always required to have a 4-year degree, the U.S. Bureau of Labor Statistics (BLS) notes that private high schools may still favor applicants who have a bachelor's degree (www.bls.gov). The BLS also notes that prospective candidates may consult the National Council for Accreditation of Teacher Education and the Teacher Education Accreditation Council, who accredit education programs for teachers (www.bls.gov). These institutions may help candidates to facilitate their entry into the profession.\n
	While in college, prospective high school teachers may simultaneously participate in a teacher preparation course or program, which is typically required by state licensing boards and may be a part of their curriculum to earn a degree. These programs usually last for one year and provide aspiring teachers with experience in student-teacher interactions.\n",
	employer_id: guest.id,
	status: true
)
job3 = Job.create(
	title: "Web Developer",
	jobtype:	"full_time",
	salary:	1100000,
	location_id: new_york.id,
	description: "We are searching for outstanding web developers to be responsible for developing innovative, reusable Web-based tools for progressive online activism and community building. Our web developers work closely with our project managers, strategists and design team members to develop specifications and make recommendations on the use of new and emerging technologies. Programming, graphic design and database administration are all elements of this position.\n
	Work closely with Project Managers and other members of the Development Team to both develop detailed specification documents with clear project deliverables and timelines, and to ensure timely completion of deliverables.\n
	Produce project estimates during sales process, including expertise required, total number of people required, total number of development hours required, etc.\n
	Attend client meetings during the sales process and during development.\n
	Work with clients and Project Managers to build and refine graphic designs for websites. Must have strong skills in Photoshop, Fireworks, or equivalent application(s).\n
	Convert raw images and layouts from a graphic designer into CSS/XHTML themes.\n
	Determine appropriate architecture, and other technical solutions, and make relevant recommendations to clients.\n
	Communicate to the Project Manager with efficiency and accuracy any progress and/or delays. Engage in outside-the-box thinking to provide high value-of-service to clients.\n
	Alert colleagues to emerging technologies or applications and the opportunities to integrate them into operations and activities.\n
	Be actively involved in and contribute regularly to the development community of the CMS of your choice.\n
	Develop innovative, reusable Web-based tools for activism and community building.",
	employer_id: guest.id,
	status: true
)
	job4 = Job.create(
	title: "Software Engineer",
	jobtype:	"full_time",
	salary:	100000,
	location_id: new_york.id,
	description: "We are searching for outstanding web developers to be responsible for developing innovative, reusable Web-based tools for progressive online activism and community building. Our web developers work closely with our project managers, strategists and design team members to develop specifications and make recommendations on the use of new and emerging technologies. Programming, graphic design and database administration are all elements of this position.\n
	Work closely with Project Managers and other members of the Development Team to both develop detailed specification documents with clear project deliverables and timelines, and to ensure timely completion of deliverables.\n
	Produce project estimates during sales process, including expertise required, total number of people required, total number of development hours required, etc.\n
	Attend client meetings during the sales process and during development.\n
	Work with clients and Project Managers to build and refine graphic designs for websites. Must have strong skills in Photoshop, Fireworks, or equivalent application(s).\n
	Convert raw images and layouts from a graphic designer into CSS/XHTML themes.\n
	Determine appropriate architecture, and other technical solutions, and make relevant recommendations to clients.\n
	Communicate to the Project Manager with efficiency and accuracy any progress and/or delays. Engage in outside-the-box thinking to provide high value-of-service to clients.\n
	Alert colleagues to emerging technologies or applications and the opportunities to integrate them into operations and activities.\n
	Be actively involved in and contribute regularly to the development community of the CMS of your choice.\n
	Develop innovative, reusable Web-based tools for activism and community building.",
	employer_id: lei.id,
	status: true
)
job5 = Job.create(
	title: "Hardware Engineer",
	jobtype:	"full_time",
	salary:	900000,
	location_id: new_port.id,
	description: "Computer hardware engineers are responsible for the hardware configuration of a computer. They update systems by improving the components, layout and design of a computer for increased efficiency. They are expected to increase the speed and function of the computer. They also design the most compact and cost-effective model possible.\n

	Specifically, these professionals analyze existing systems to identify flaws or inefficiencies and use problem-solving skills, including both inductive and deductive reasoning, to make modifications that will increase the functions of the computer. Based on careful calculations and advanced knowledge of electronics, computer hardware engineers develop new designs in the existing components, such as microchips and circuit boards, and then integrate these components in a form fitting layout. These hardware engineers are responsible for the advances in computer systems.\n

	Computer hardware engineers are also responsible for related aspects of computer production. They are required to inspect modified computer systems ensuring that the product meets company standards. They also need to assess customer needs and offer clients technical support.",
	employer_id: lei.id,
	status: true
)
job6 = Job.create(
	title: "Principal Engineer",
	jobtype:	"full_time",
	salary:	1100000,
	location_id: new_port.id,
	description: "We are searching for outstanding web developers to be responsible for developing innovative, reusable Web-based tools for progressive online activism and community building. Our web developers work closely with our project managers, strategists and design team members to develop specifications and make recommendations on the use of new and emerging technologies. Programming, graphic design and database administration are all elements of this position.\n
	Work closely with Project Managers and other members of the Development Team to both develop detailed specification documents with clear project deliverables and timelines, and to ensure timely completion of deliverables.\n
	Produce project estimates during sales process, including expertise required, total number of people required, total number of development hours required, etc.\n
	Attend client meetings during the sales process and during development.\n
	Work with clients and Project Managers to build and refine graphic designs for websites. Must have strong skills in Photoshop, Fireworks, or equivalent application(s).\n
	Convert raw images and layouts from a graphic designer into CSS/XHTML themes.\n
	Determine appropriate architecture, and other technical solutions, and make relevant recommendations to clients.\n
	Communicate to the Project Manager with efficiency and accuracy any progress and/or delays. Engage in outside-the-box thinking to provide high value-of-service to clients.\n
	Alert colleagues to emerging technologies or applications and the opportunities to integrate them into operations and activities.\n
	Be actively involved in and contribute regularly to the development community of the CMS of your choice.\n
	Develop innovative, reusable Web-based tools for activism and community building.",
	employer_id: lei.id,
	status: true
)
job7 = Job.create(
	title: "Junior Engineer",
	jobtype:	"part_time",
	salary:	100000,
	location_id: new_york.id,
	description: "We are searching for outstanding web developers to be responsible for developing innovative, reusable Web-based tools for progressive online activism and community building. Our web developers work closely with our project managers, strategists and design team members to develop specifications and make recommendations on the use of new and emerging technologies. Programming, graphic design and database administration are all elements of this position.\n
	Work closely with Project Managers and other members of the Development Team to both develop detailed specification documents with clear project deliverables and timelines, and to ensure timely completion of deliverables.\n
	Produce project estimates during sales process, including expertise required, total number of people required, total number of development hours required, etc.\n
	Attend client meetings during the sales process and during development.\n
	Work with clients and Project Managers to build and refine graphic designs for websites. Must have strong skills in Photoshop, Fireworks, or equivalent application(s).\n
	Convert raw images and layouts from a graphic designer into CSS/XHTML themes.\n
	Determine appropriate architecture, and other technical solutions, and make relevant recommendations to clients.\n
	Communicate to the Project Manager with efficiency and accuracy any progress and/or delays. Engage in outside-the-box thinking to provide high value-of-service to clients.\n
	Alert colleagues to emerging technologies or applications and the opportunities to integrate them into operations and activities.\n
	Be actively involved in and contribute regularly to the development community of the CMS of your choice.\n
	Develop innovative, reusable Web-based tools for activism and community building.",
	employer_id: lei.id,
	status: true
)
job8 = Job.create(
	title: "Math Teacher",
	jobtype:	"full_time",
	salary:	900000,
	location_id: new_york.id,
	description: "High school teachers work for schools that enroll students from grades 9-12. They typically instruct students on a single subject, such as English, math, science, history, language or art. To do so, they must plan curricula, which may cover basic topics in algebra to advanced information on psychology.\n
	High school teachers can be influential in students' lives, since students will apply what they learn to their future endeavors. Though teaching can be rewarding, high school teachers may have challenging jobs when dealing with unmotivated or disruptive students. Stress can occur when facilities aren't up to standards, workloads become difficult to manage and teachers work more than 40 hours per week.\nAspiring public high school teachers must obtain a bachelor's degree; although private high school teachers are not always required to have a 4-year degree, the U.S. Bureau of Labor Statistics (BLS) notes that private high schools may still favor applicants who have a bachelor's degree (www.bls.gov). The BLS also notes that prospective candidates may consult the National Council for Accreditation of Teacher Education and the Teacher Education Accreditation Council, who accredit education programs for teachers (www.bls.gov). These institutions may help candidates to facilitate their entry into the profession.\n
	While in college, prospective high school teachers may simultaneously participate in a teacher preparation course or program, which is typically required by state licensing boards and may be a part of their curriculum to earn a degree. These programs usually last for one year and provide aspiring teachers with experience in student-teacher interactions.\n",
	employer_id: lei.id,
	status: true
)
job9 = Job.create(
	title: "Full Stack Web Developer",
	jobtype:	"full_time",
	salary:	1100000,
	location_id: new_york.id,
	description: "We are searching for outstanding web developers to be responsible for developing innovative, reusable Web-based tools for progressive online activism and community building. Our web developers work closely with our project managers, strategists and design team members to develop specifications and make recommendations on the use of new and emerging technologies. Programming, graphic design and database administration are all elements of this position.\n
	Work closely with Project Managers and other members of the Development Team to both develop detailed specification documents with clear project deliverables and timelines, and to ensure timely completion of deliverables.\n
	Produce project estimates during sales process, including expertise required, total number of people required, total number of development hours required, etc.\n
	Attend client meetings during the sales process and during development.\n
	Work with clients and Project Managers to build and refine graphic designs for websites. Must have strong skills in Photoshop, Fireworks, or equivalent application(s).\n
	Convert raw images and layouts from a graphic designer into CSS/XHTML themes.\n
	Determine appropriate architecture, and other technical solutions, and make relevant recommendations to clients.\n
	Communicate to the Project Manager with efficiency and accuracy any progress and/or delays. Engage in outside-the-box thinking to provide high value-of-service to clients.\n
	Alert colleagues to emerging technologies or applications and the opportunities to integrate them into operations and activities.\n
	Be actively involved in and contribute regularly to the development community of the CMS of your choice.\n
	Develop innovative, reusable Web-based tools for activism and community building.",
	employer_id: lei.id,
	status: true
)
job10 = Job.create(
	title: "Hacky Software Engineer",
	jobtype:	"full_time",
	salary:	100000,
	location_id: new_york.id,
	description: "When you close your eyes at night, do you dream of writing perfect code in an awesome spaceship? And on the craft is a team of your awesome friends who push and challenge you to be better than you were the day before? Well, we’re still working on that spaceship part, but we think we can offer you the rest of that dream.\n

	But seriously, if you want to work on a high-traffic website and build products that YOU would actually use, open your eyes to this new adventure. We are looking for a true adventurer, a go-getter of an engineer who can take our team to the next level and rocket-launch us into the next galaxy. Is it you, traveler?\n

	Collectively, we’ve attended top schools like Stanford and Harvard, speak 10 languages (not including programming languages, of course), and are located in eight different locations (we have a distributed team). Of course, what is impressive isn’t where we are from or where we are now, but what we’ve accomplished. In the last year, we’ve shipped 007, which has garnered $[insert revenue generated] in revenue (or include some other metric, like how many customers use your product).\n

	We are looking for a seasoned engineer to join a stellar team working on 007. While this is an individual contributor role, you’ll be involved in many aspects– helping evolve our existing architecture, working with teams to improve operations, and implementing new features and functionality.\n

	We’re looking for someone who has an interest in system architecture, but a passion for getting things done. You’re smart enough to work at top companies, but you’re picky about finding the right role (this is more than just a job, right?). You’re experienced, but you also like to learn new things. And you want to work with smart people and have fun building something great.",
	employer_id: guest.id,
	status: true
	)
job11 = Job.create(
	title: "Fat Hardware Engineer",
	jobtype:	"full_time",
	salary:	900000,
	location_id: new_port.id,
	description: "Computer hardware engineers are responsible for the hardware configuration of a computer. They update systems by improving the components, layout and design of a computer for increased efficiency. They are expected to increase the speed and function of the computer. They also design the most compact and cost-effective model possible.\n

	Specifically, these professionals analyze existing systems to identify flaws or inefficiencies and use problem-solving skills, including both inductive and deductive reasoning, to make modifications that will increase the functions of the computer. Based on careful calculations and advanced knowledge of electronics, computer hardware engineers develop new designs in the existing components, such as microchips and circuit boards, and then integrate these components in a form fitting layout. These hardware engineers are responsible for the advances in computer systems.\n

	Computer hardware engineers are also responsible for related aspects of computer production. They are required to inspect modified computer systems ensuring that the product meets company standards. They also need to assess customer needs and offer clients technical support.",
	employer_id: lei.id,
	status: true
	)
job12 = Job.create(
	title: "Bossy Principal Engineer",
	jobtype:	"full_time",
	salary:	1100000,
	location_id: new_port.id,
	description: "A principal engineer is an engineering professional who has several years of experience working in his respective field of engineering. Principal engineers are responsible for providing guidance and oversight to multiple teams working on numerous products or developing various forms of technologies. They are leaders who think strategically and have a long-range goal in mind.\n

	Principal engineers manage all phases of technical projects. They oversee the product's or project’s conception, design and initial product specifications and manage scheduling, estimating and securing materials. They draft and execute construction contracts, track project progress and keep costs under control. Principal engineers also conduct engineering studies and investigations, and prepare reports for company leadership. They also provide engineering guidance to other departments, help to train new engineers and keep abreast of industry trends and issues.\n

	To become a principal engineer, you need to earn a bachelor’s degree in any discipline of engineering, such as chemical, civil, computer, electrical, mechanical or microelectronic engineering. In general, these programs cover engineering fundamentals along with physics and mathematics, plus course work specific to the principles found in each engineering discipline. Students should attend undergraduate engineering programs that have been accredited by the Engineering Accreditation Commission of the Accreditation Board for Engineering and Technology (ABET). The ABET is a worldwide leader in assuring quality in undergraduate programs in engineering, engineering technology, applied science and computing. This accreditation certifies that a program meets the organization’s highest standards of quality in curriculum, facilities and faculty.",
	employer_id: lei.id,
	status: true
	)
job13 = Job.create(
	title: "U.S President",
	jobtype:	"full_time",
	salary:	1929394,
	location_id: washington.id,
	description: "The president serves as the highest government leader in the United States. Article II of the Constitution specifies that the president has two primary job functions: to serve as chief executive of the federal government and to serve as commander in chief of the armed forces. As chief executive, the president works with other leaders of the executive branch, including the vice president, cabinet members, and leaders of other federal agencies, to ensure that federal laws are carried out. The president does not make laws—that responsibility is delegated to Congress. However, the president does develop federal policies regarding issues such as education, foreign relations, and energy, and subsequently works with Congress to create legislation that administers those policies. In addition, the president has the power to approve or veto legislation. Additional job responsibilities include negotiating treaties with other nations, establishing a federal budget, appointing diplomats and Supreme Court judges, and granting pardons. Finally, as commander in chief of the country’s military, the president has the authority to send troops into combat, as well as the power to decide whether to use nuclear weapons.\n

	Almost any adult American citizen is qualified to become president. Article II, Section 1 of the Constitution establishes that anyone who is a natural-born U.S. citizen, at least thirty-five years old, and has lived in the United States for at least fourteen years can become president. The qualifications seem straight forward, but many people disagree about the meaning of “natural-born.” In 1968 presidential contender George Romney’s eligibility was questioned because he had been born in Mexico. In 2008 some wondered if John McCain qualified as a natural-born citizen because he was born in the Panama Canal Zone while his parents were stationed at a military base. And in 2016 opponents of senator and presidential contender Ted Cruz question his eligibility because he was born in Canada.\n

	The fourteenth Amendment states that “all persons born or naturalized in the United States, and subject to the jurisdiction thereof, are citizens of the United States.” Law professor Gabriel J. Chin declared that McCain did not meet the constitutional requirements. However, the Senate disagreed, noting that the Founding Fathers did not intend to deny citizenship to the children of military personnel born while stationed outside the United States. The Senate officially declared McCain eligible to become president by passing a nonbinding resolution in April of 2007. And although most legal scholars maintain that Cruz is eligible to be elected as president, the meaning of “natural-born U.S. citizen” continues to be uncertain because the Supreme Court has never ruled on the matter. This uncertainly provides fodder for Cruz's opponents, particularly Donald J. Trump, who question Cruz's eligibility on the campaign trail.\n

	The Constitution also includes a few restrictions. Article I allows the Senate to forbid anyone who has been impeached from holding any federal office, including the presidency. In addition, the president is elected to serve for a term of four years, and the twenty-second Amendment limits the number of terms one person can serve to two. Furthermore, if a vice president assumes the office of president following a death or resignation and serves more than two years of his or her predecessor’s term, he or she can only be elected to serve one more term. If, however, the vice president assumes the presidency and serves less than two years of his or her predecessor’s term, then he or she can be elected to serve two additional terms.\n

	When George Washington became president, the Constitution did not limit the number of terms. However, Washington personally believed that a president should serve only two terms and refused to run for reelection following his second term. Washington’s two-term precedent was respected until the turbulent years of World War II. Because many Americans believed it best to retain their president during wartime, Franklin Roosevelt was elected to serve four consecutive terms. Many believed that Roosevelt’s new precedent should not be repeated, so in 1951 Congress ratified the twenty-second Amendment to limit a president to two terms.",
	employer_id: walmart.id,
	status: true
)
job17 = Job.create(
	title: "Inventory Manager",
	jobtype:	"full_time",
	salary:	200000,
	location_id: austin.id,
	description: "The success of Wal-Mart is linked to each Associate's mastery and daily application of the Company's Three Basic Beliefs: \n

	Contributes to a unique family and team environment by demonstrating respect for and sensitivity to all individuals; supporting the Wal-Mart commitment to diversity; following through on commitments; and communicating clearly and courteously with fellow Associates, Customers, and Suppliers; \n

	Makes shopping at Wal-Mart a uniquely positive experience by greeting Customers with warmth, enthusiasm, energy, and courtesy; showing a personal interest in them; determining what help they need and promptly delivering it; and mastering Wal-Mart's products and services \n

	Behaves in a lawful, honest, and ethical manner at all times; sets and achieves high standards of performance; takes personal responsibility for completing duties timely and efficiently; shows initiative; and suggests ways in which Wal-Mart can continuously improve. \n

	Primary job responsibilities and functions are listed below. An Associate in this position will be expected to perform additional job-related responsibilities and duties throughout the facility as assigned and/or as necessary. \n

	Unloads merchandise from delivery trucks and places stock in the appropriate location such as the backroom and salesfloor. \n
	Maintains accurate inventory controls by categorizing merchandise in bins by department, labeling overstock merchandise, scanning merchandise daily, adjusting inventory levels in the perpetual inventory system, and executing Company programs. \n
	Utilizes handheld scanner to identify items needed on the salesfloor and retrieves merchandise from inventory bins, occasionally utilizing a ladder or power equipment, such as a power jack or sky lift. \n
	Monitors area for signs of shrink and potential security risks, and contacts management and/or In-Store Loss Prevention when problems are identified.\n
	Ensures a safe and clean environment by maintaining safety standards, such as stabilizing merchandise on risers, highwalls, and features; securing merchandise on displays; ensuring ladders are properly secured; removing empty pallets, cardboard, and trash from the salesfloor; and performing maintenance and cleaning which requires keeping floors dry, neat, and clean.",
	employer_id: walmart.id,
	status: true
)
job18 = Job.create(
	title: "Research Scientist",
	jobtype:	"full_time",
	salary:	1100000,
	location_id: seattle.id,
	description: "General Characteristics: This is the intermediate level - developing/maturing professional - may be entry level for PhD who has equivalent experience related to area of specialization. Independently evaluates, selects and applies standardized scientific or engineering procedures and techniques; assignments have clear and specified objectives, and require the investigation of a limited number of variables. Incumbent relies on limited experience and exercises judgment within defined procedures and practices in making minor adaptations and modifications. Performance at this level requires developmental experience in a professional position, or equivalent graduate level education.\n

	Knowledge: Knows and effectively uses the fundamental concepts, practices and procedures of a particular field of specialization; continues development of technical expertise and knowledge through experience and application.\n

	Direction received: Assigned work under general guidance; receives instruction on specific assignment objectives, complex features, and possible solutions. Assistance is furnished on unusual problems, and work is reviewed for application of sound professional judgment.\n

	Typical duties and responsibilities: Performs work that involves conventional types of plans, investigations, systems, structures, or equipment with relatively few complex features or for which there are precedents. Performs tasks/projects of a larger scope; may lead specific tasks within the project scope; scopes tasks and develops approaches for moderately difficult tasks; takes responsibility for assuring quality, cost effectiveness and timeliness for small projects. Assists in preparation of reports, papers, presentations, new proposals, etc. , and may collaborate on some; presents papers at technical meetings. Continues to enhance capabilities for project planning, including assessment of cost, scope and schedule against plan; implements new systems/approaches for moderately difficult tasks/projects. Has established networks in internal peer group; starts becoming part of identifiable external peer network. Interacts in a collaborative manner with other team members to accomplish organizational goals; provides ideas to improve efficiency at group level. Participates in procurement of additional/new funding through contributions to technical proposal preparation and/or presentations. Contributes to positive co-worker/customer/investigator relationships through efficient interaction on current grants/projects.",
	employer_id: usgov.id,
	status: true
)
job19 = Job.create(
	title: "Cop",
	jobtype:	"full_time",
	salary:	100000,
	location_id: san_francisco.id,
	description: "The City and County of San Francisco invites you to join a highly respected police department and serve the citizens of one of the most beautiful cities in the country. San Francisco Police Officers perform a wide variety of duties to promote public safety and security, prevent crime and enforce the law. Police officers perform a number of essential functions. For example, they patrol districts to prevent and detect crime; respond to calls for assistance; conduct criminal investigations; interact with the community to build cooperation and support; pursue and arrest suspects; enforce traffic and parking laws; write reports and maintain records; work with superiors, peers, and others as a team; prepare for and participate in planned events; prepare for court and give testimony; and fulfill other administrative duties when required. This is much more than a job; it is an opportunity to build a career of which you can be proud.\n

	Citizenship: Applicants must be United States citizens.\n

	Age: Applicants must be at least 20 years old when they take the examination and at least 21 years of age by the time of appointment. (Civil Service Rule 210.10)\n

	Driver License: Applicants must possess and maintain a valid driver license to operate an automobile at the time of application and throughout the selection process. Possession of a valid California Driver License is required prior to the date of hire.\n

	Education: Applicants must be a U.S. High School Graduate or have passed a G.E.D. or the California High School Proficiency Examination or have an AA or higher degree from an accredited college or university.",
	employer_id: policedept.id,
	status: true
)
job20 = Job.create(
	title: "Head Nurse",
	jobtype:	"full_time",
	salary:	900000,
	location_id: new_york.id,
	description: "Practice the art and science of evidence-based advanced nursing at NewYork-Presbyterian Hospital. Lead the charge in improving the patient care experience. Join an action-oriented team at an Ivy League medical center, and go to the next level in your advanced nursing career.   Together, we use our brains and hearts to provide the highest level of care imaginable. In the process, experience all the reasons we entered our noble field. \n

	At NewYork-Presbyterian, nursing is a life-changing career journey focused on amazing patient outcomes every step of the way. Each of our nurses dares to be truly excellent – thriving in a compassionate culture of care and caring. Together, we improve the health of patients and their families, making our communities – and the world – stronger.\n

	You’ll work with the brightest minds in healthcare to make tomorrow better for countless human beings. It’s the kind of nursing that requires an unwavering commitment to excellence and a constant spirit of professionalism. And it’s your opportunity to enjoy flexible scheduling, shared clinical decision-making, inspirational leadership, supportive colleagues and much more. Now, you have the opportunity to join us.\n

	This is a full time days shift at NewYork-Presbyterian Hospital/Weill Cornell Medical Center",
	employer_id: myp.id,
	status: true
)
job21 = Job.create(
	title: "Security Guard",
	jobtype:	"full_time",
	salary:	1100000,
	location_id: chicago.id,
	description: "Security guards monitor and protect property against criminal activity and damage. These guards may work at schools, hospitals and banks, along with such commercial properties as shopping centers, casinos and sports venues, power plants and transportation hubs. They monitor the flow of people and employees and respond in emergency situations.\n

	Although some are stationed at desks or in gatehouses, others may patrol on foot or in vehicles, so security guards can benefit from being physically fit. Employers generally look for observant, detail-oriented individuals who aren't easily distracted and can identify threats quickly. Active listening also helps in the field, so security guards can identify complaints and receive information on questionable activity.\n

	In order to adequately protect people and property, security guards must know and enforce rules and regulations to prevent criminal activity before it happens. They may monitor points of access in a building or property to allow entry only to individuals with the correct identification or authorization. In some situations, such as public events or crowded areas, they walk amongst visitors to promote order and provide a visible presence that deters safety issues.\n

	If working after hours, they may maintain surveillance of a property by patrolling the grounds or using closed-circuit monitoring or alarm systems. They'll investigate and report signs of damage or unlawful entry as it occurs. Such issues require that they contact authorities and make written or verbal reports to law enforcement. In emergency situations, they may provide first aid or assistance and alert first responders. According to the U.S. Bureau of Labor Statistics (BLS) high-risk facilities often require ongoing training as well as the use of firearms (www.bls.gov).",
	employer_id: walmart.id,
	status: true
)
job22 = Job.create(
	title: "Web Designer",
	jobtype:	"full_time",
	salary:	100000,
	location_id: new_york.id,
	description: "A web designer creates the look, layout and features of a website. The job involves understanding both graphic design and computer programming. Once a website is created, a designer helps with maintenance and additions to the website. They work with development teams or managers for keeping the site up-to-date and prioritizing needs, among other tasks.\n

	The U.S. Bureau of Labor Statistics (BLS) reported in 2013 that the median hourly wage for web developers, who perform the same duties as web designers, was $30.37, or $63,160 annually (www.bls.gov). The 2012-2022 projected job growth for web developers was 20%, per the BLS. According to the agency, the median income for graphic designers in 2013 was $44,830 ($21.55 hourly). The BLS projected job growth of 7% between 2012 and 2022 for this occupation.\n

	A web designer's job duties cover all aspects of creating a website. Upon meeting with clients and assessing their needs, web designers help create and maintain the product.\n


	An associate's degree program related to web design, such as an Associate of Applied Science in Web Graphic Design, provides a student with a foundation in the design and technical aspects of creating a website. Students learn web design skills and build professional portfolios that highlight their skills and abilities. ",
	employer_id: lei.id,
	status: true
	)
job23 = Job.create(
	title: "Accountant",
	jobtype:	"full_time",
	salary:	900000,
	location_id: new_york.id,
	description: "Having a qualification from a recognised professional accountancy body demonstrates to employers, clients and the general public than an accountant has the training and skills to do your job well. Graduates from any academic background can train as a chartered accountant, usually once they are in employment, but should have an excellent academic record, including five GCSEs (grades A - C, including maths and English), good A levels and an honours degree. Recently some firms, in particular the Big 4, have relaxed their entry criteria, and it is now not impossible to enter the profession with a 2.2 degree or lower number of UCAS points. While previous study of accounting, finance or business related subjects is not prerequisite, this may allow exemptions from some exams. Prior legal knowledge, especially in relation to taxation, may be beneficial.\n

	Qualification as a chartered accountant takes at least three years, and can be demanding; study for exams takes place alongside full-time employment and graduates should carefully consider the package offered in their training contract. While working toward chartered status, provisions for training and study leave play an important role in job satisfaction, as well as salary and the atmosphere of the firm where you work.\n

	As part of the training, graduates must complete three years of relevant work experience. Prior experience gained through relevant internships may count toward this, but the work experience must always meet certain development objectives and be supervised by an employer approved by the qualification provider. Qualification is dependent on the fulfillment of these training objectives, professional exams, and a professional ethics assessment.\n

	There are several separate institutes of chartered accountants (see links below) and entry requirements do vary. Previous experience is unnecessary, although many employers offer vacation courses, workshops and placements which can give a useful insight into the profession, and reflect well on applicants' relevant knowledge and interest in the industry. Certain large firms have preferences for qualifications from specific institutes, although training generally covers the same topics and skills. In order to maintain chartered status, accountants are required to pursue objectives toward continuing professional development (CPD) each year.",
	employer_id: lei.id,
	status: true
	)
job24 = Job.create(
	title: "Production Manager",
	jobtype:	"full_time",
	salary:	1100000,
	location_id: chicago.id,
	description: "Duties: Drive the product discovery process by collaborating with the Business, User Experience, and Engineering Teams during discovery to assess value, usability and feasibility of product features; specifying, prioritizing, and communicating high level and detailed product specifications; and using written specifications, business rules, flows, cases and user experience generated deliverables (for example, prototypes, wireframes, design and copy documents). Develop and champion a product vision, strategy, and roadmap for a specific product within a product area in support of corporate goals and objectives by using customer and market research, customer and user feedback, customer usage, and competitive analysis to identify new product opportunities and enhancements; and working with multiple functions to build and evaluate business cases to support product investment decisions. Support product implementation and deployment by engaging with Engineering and Project Management during implementation to answer questions and make scope tradeoff decisions. Coordinate post launch activities to validate that the product works as designed and that acceptance testing was successful. Assist business stakeholders once applications are launched in production with training and production support and actively work on collecting feedback to incorporate requirements in future technical releases. Provide and support the implementation of business solutions by building relationships and partnerships with key stakeholders. Identify business needs; determine and carry out necessary processes and practices. Monitor progress and results; recognize and capitalize on improvement opportunities; and adapt to competing demands, organizational changes, and new responsibilities. This position does not supervise employees.\n

	Minimum education and experience required: Master’s degree or equivalent in Computer Science, Business Administration, Information Systems, or related field and 2 years of experience in product management, business consulting, or related field; OR Bachelor’s degree or equivalent in Computer Science, Business Administration, Information Systems, or related field and 5 years of experience in product management, business consulting, or related field.\n

	Skills required: Experience in internet product management. Experience developing software with Agile methodology. Experience shipping consumer applications. Experience in the development and management of a technical product roadmap. Experience shipping Retail Ecommerce products. Experience with Web analytics tools like Omniture and other tools like Tealeaf. Demonstrated understanding of User Experience principles and philosophies. Experience in Industry Analysis. ",
	employer_id: walmart.id,
	status: true
	)
Myjob.destroy_all
guest_job1 = Myjob.create(job_id: job1.id, seeker_id: guest.id, status: "visited")
guest_job2 = Myjob.create(job_id: job2.id, seeker_id: guest.id, status: "archived")
guest_job3 = Myjob.create(job_id: job3.id, seeker_id: guest.id, status: "visited")
guest_job4 = Myjob.create(job_id: job4.id, seeker_id: guest.id, status: "visited")
guest_job5 = Myjob.create(job_id: job5.id, seeker_id: guest.id, status: "applied")
guest_job6 = Myjob.create(job_id: job6.id, seeker_id: guest.id, status: "applied")
guest_job7 = Myjob.create(job_id: job7.id, seeker_id: guest.id, status: "visited")
guest_job8 = Myjob.create(job_id: job8.id, seeker_id: guest.id, status: "archived")
guest_job9 = Myjob.create(job_id: job9.id, seeker_id: guest.id, status: "visited")
guest_job10 = Myjob.create(job_id: job10.id, seeker_id: guest.id, status: "visited")
guest_job11 = Myjob.create(job_id: job11.id, seeker_id: guest.id, status: "applied")
guest_job12 = Myjob.create(job_id: job12.id, seeker_id: guest.id, status: "applied")
lei_job2 = Myjob.create(job_id: job2.id, seeker_id: lei.id, status: "visited")
lei_job3 = Myjob.create(job_id: job3.id, seeker_id: lei.id, status: "visited")
lei_job4 = Myjob.create(job_id: job4.id, seeker_id: lei.id, status: "visited")
lei_job5 = Myjob.create(job_id: job5.id, seeker_id: lei.id, status: "visited")


Application.destroy_all
job1app1 = Application.create(real_name: "Lei", email: "qq@qq.com", job_id: job1.id, user_id: lei.id)
job1app2 = Application.create(real_name: "Lei", email: "qq@qq.com", job_id: job1.id, user_id: lei.id)
job1app3 = Application.create(real_name: "Lei", email: "qq@qq.com", job_id: job1.id, user_id: lei.id)
job2app1 = Application.create(real_name: "Lei", email: "qq@qq.com", job_id: job2.id, user_id: lei.id)
job2app2 = Application.create(real_name: "Lei", email: "qq@qq.com", job_id: job2.id, user_id: lei.id)
