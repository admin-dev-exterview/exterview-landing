export const securityData = {
  title: "Privacy Policy",
  para: "Exterview provides Interview As A Service(IAAS), Platform As A Service(PAAS), Resume As A Service(RAAS) products to millions of users worldwide to solve their business problems. Security is a key component in our offerings, and is reflected in our people, process, and products. This page covers topics like data security, operational security, and physical security to explain how we offer security to our customers.",
  categories: [
    {
      category: "Organizational Security",
      subtitles: [
        {
          subtitle: "Employee Background Checks",
          paragraphs:
            "We have an Information Security Management System (ISMS) in place which takes into account our security objectives and the risks and mitigations concerning all the interested parties. We employ strict policies and procedures encompassing the security, availability, processing, integrity, and confidentiality of customer data.",
        },
        {
          subtitle: "Security Awareness",
          paragraphs:
            "Each employee, when inducted, signs a confidentiality agreement and acceptable use policy, after which they undergo training in information security, privacy, and compliance. Furthermore, we evaluate their understanding through tests and quizzes to determine which topics they need further training in. We provide training on specific aspects of security, that they may require based on their roles.We educate our employees continually on information security, privacy, and compliance in our internal community where our employees check in regularly, to keep them updated regarding the security practices of the organization. We also host internal events to raise awareness and drive innovation in security and privacy.",
        },
      ],
    },
    {
      category: "Physical Security",
      subtitles: [
        {
          subtitle: "At Workplace",
          paragraphs:
            "We control access to our resources (buildings, infrastructure and facilities), where accessing includes consumption, entry, and utilization, with the help of access cards. We provide employees, contractors, vendors, and visitors with different access cards that only allow access strictly specific to the purpose of their entrance into the premises. Human Resource (HR) team establishes and maintains the purposes specific to roles. We maintain access logs to spot and address anomalies.",
        },
        {
          subtitle: "At Data Centers",
          paragraphs:
            "We use cloud data centers, all the security practices from cloud service providers are applied by default. We do not have any physical data centers.",
        },
        {
          subtitle: "Monitoring",
          paragraphs:
            "We monitor all entry and exit movements throughout our premises in all our business centers through CCTV cameras deployed according to local regulations. Back-up footage is available up to a certain period, depending on the requirements for that location.",
        },
      ],
    },
    {
      category: "Infrastructure Security",
      subtitles: [
        {
          subtitle: "Network Security",
          paragraphs: `Our network security and monitoring techniques are designed to provide multiple layers of protection and defense. Our systems are segmented into separate networks to protect sensitive data. Systems supporting testing and development activities are hosted in a separate network from systems supporting Exterview’s production infrastructure.

All crucial parameters are continuously monitored using cloud tool and notifications are triggered in any instance of abnormal or suspicious activities in our production environment.`,
        },
        {
          subtitle: "Network Redundancy",
          paragraphs: `All the components of our platform are redundant. We use a distributed cloud architecture and serverless approaches to shield our system and services from the effects of possible server failures. If there’s a server failure, users can carry on as usual because their data and Exterview services will still be available to them.`,
        },
        {
          subtitle: "DDoS Prevention",
          paragraphs: `We use technologies from well-established and trustworthy service providers to prevent DDoS attacks on our servers. These technologies offer multiple DDoS mitigation capabilities to prevent disruptions caused by bad traffic, while allowing good traffic through. This keeps our websites, applications, and APIs highly available and performing.`,
        },
        {
          subtitle: "Intrusion Detection and Prevention",
          paragraphs: `Our intrusion detection mechanism takes note of host-based signals on individual devices and network-based signals from monitoring points within our servers. Administrative access, use of privileged commands, and system calls on all servers in our production network are logged. Rules and machine intelligence built on top of this data give security engineers warnings of possible incidents.`,
        },
      ],
    },
    {
      category: "Data Security",
      subtitles: [
        {
          subtitle: "Secure by Design",
          paragraphs: `Every change and new feature is governed by a change management policy to ensure all application changes are authorised before implementation into production. Our Software Development Life Cycle (SDLC) mandates adherence to secure coding guidelines, as well as screening of code changes for potential security issues with manual review processes.

Our robust security features implemented in the application layer, provides functionalities to mitigate threats such as SQL injection, Cross site scripting and application layer DOS attacks.`,
        },
        {
          subtitle: "Data Isolation",
          paragraphs: `Our framework distributes and maintains the cloud space for our customers. Each customer’s service data is logically separated from other customers’ data using a set of secure protocols in the framework. This ensures that no customer’s service data becomes accessible to another customer.

The service data is stored on our servers when you use our services. Your data is owned by you, and not by Exterview. We do not share this data with any third-party without your consent.`,
        },
        {
          subtitle: "Encryption",
          paragraphs: `In Transit: All customer data transmitted to our servers over public networks is protected using strong encryption protocols. We mandate all connections to our servers use Transport Layer Security (TLS 1.2/1.3) encryption with strong ciphers, for all connections including web access, API access. This ensures a secure connection by allowing the authentication of both parties involved in the connection, and by encrypting data to be transferred.

We have enabled HTTP Strict Transport Security header (HSTS) to all our web connections. This tells all modern browsers to only connect to us over an encrypted connection, even if you type a URL to an insecure page at our site. Additionally, on the web we flag all our authentication cookies as secure.

At Rest: Sensitive customer data at rest is encrypted using Advanced Encryption Standard (AES). We maintain the keys using our cloud Key Management Service (KMS).`,
        },
        {
          subtitle: "Data Retention and Disposal",
          paragraphs: `We hold the data in your account as long as you choose to use Exterview Services. Once you received request for data deletion in your Exterview user account, your data will get deleted from the active database within 2 weeks.`,
        },
      ],
    },
    {
      category: "Identity and Access Control",
      subtitles: [
        {
          subtitle: "Administrative Access",
          paragraphs: `We employ technical access controls and internal policies to prohibit employees from arbitrarily accessing user data. We adhere to the principles of least privilege and role-based permissions to minimize the risk of data exposure.

Access to production environments is maintained by a central directory and authenticated using a combination of strong passwords, two-factor authentication. Additionally, we log all the operations and audit them periodically.`,
        },
      ],
    },
    {
      category: "Operational Security",
      subtitles: [
        {
          subtitle: "Logging and Monitoring",
          paragraphs: `We monitor and analyse information gathered from services. We record this information in the form of event logs, audit logs, fault logs. These logs are automatically monitored and analyzed to a reasonable extent that helps us identify anomalies such as unusual activity in employees’ accounts or attempts to access customer data. We store these logs in a secure server isolated from full system access, to manage access control centrally and ensure availability.`,
        },
        {
          subtitle: "Vulnerability Management",
          paragraphs: `We have a dedicated vulnerability management process that actively scans for security threats using a cloud vulnerability tools with automated and manual penetration testing efforts.

Once we identify a vulnerability requiring remediation, it is logged, prioritized according to the severity, and assigned to an owner. We further identify the associated risks and track the vulnerability until it is closed by either patching the vulnerable systems or applying relevant controls.`,
        },
        {
          subtitle: "Backup",
          paragraphs: `We run incremental backups everyday using cloud back up solutions. Backup data in the cloud is stored in the same location and encrypted using AES-256 bit algorithm. If a customer requests for data recovery within the retention period, we will restore their data and provide secure access to it. The timeline for data restoration depends on the size of the data and the complexity involved.`,
        },
      ],
    },
    {
      category: "Incident Management",
      subtitles: [
        {
          subtitle: "Reporting",
          paragraphs: `We have a dedicated incident management team. We notify you of the incidents in our environment that apply to you, along with suitable actions that you may need to take. We track and close the incidents with appropriate corrective actions. Whenever applicable, we will identify, collect, acquire and provide you with necessary evidence in the form of application and audit logs regarding incidents that apply to you. Furthermore, we implement controls to prevent recurrence of similar situations.

We respond to the security or privacy incidents you report to us through contact@Exterview.in, with high priority. For general incidents, we will notify users through our blogs, forums, and social media. For incidents specific to an individual user or an organization, we will notify the concerned party through email (using their primary email address of the Organisation administrator registered with us).`,
        },
        {
          subtitle: "Breach notification",
          paragraphs: `As data controllers, we notify the concerned Data Protection Authority of a breach within 72 hours after we become aware of it, according to the General Data Protection Regulation (GDPR). Depending on specific requirements, we notify the customers too, when necessary. As data processors, we inform the concerned data controllers without undue delay.`,
        },
      ],
    },
    {
      category: "Responsible Disclosures",
      subtitles: [
        {
          subtitle: "Vulnerability Reporting",
          paragraphs:
            "A vulnerability reporting program in “Bug Bounty”, to reach the community of researchers, is in place, which recognizes and rewards the work of security researchers. We are committed to working with the community to verify, reproduce, respond and implement appropriate solutions for the reported vulnerabilities.If you want to directly report vulnerabilities to us, mail us at contact@Exterview.in.",
        },
      ],
    },
    {
      category: "Vendor and Third-party Supplier Management",
      subtitles: [
        {
          subtitle: "Vendor Management Policy",
          paragraphs:
            "We evaluate and qualify our vendors based on our vendor management policy. We onboard new vendors after understanding their processes for delivering us service, and performing risk assessments. We take appropriate steps to ensure our security stance is maintained by establishing agreements that require the vendors to adhere to confidentiality, availability, and integrity commitments we have made to our customers. We monitor the effective operation of the organization’s process and security measures by conducting periodic reviews of their controls.",
        },
      ],
    },
    {
      category: "Customer Controls for Security",
      subtitles: [
        {
          subtitle: "Offer Security",
          paragraphs: `So far, we have discussed what we do to offer security on various fronts to our customers. Here are the things that you as a customer can do to ensure security from your end:
Choose a unique, strong password and protect it.
Use the latest browser versions to ensure they are patched against vulnerabilities and to use latest security features
Exercise reasonable precautions while sharing data from our cloud environment.
Be aware of phishing and malware threats by looking out for unfamiliar emails, websites, and links that may exploit your sensitive information by impersonating Exterview or other services you trust.
We provide a thorough analysis on the shared responsibility model and how both our customers and Exterview can collaborate as well as take up individual responsibility towards cloud security and privacy.`,
        },
      ],
    },
    {
      category: "Conclusion",
      subtitles: [
        {
          paragraphs:
            "Security of your data is your right and a never-ending mission of Exterview. We will continue to work hard to keep your data secure, like we always have. For any further queries on this topic, write to us at contact@Exterview.in.",
        },
      ],
    },
  ],
};
