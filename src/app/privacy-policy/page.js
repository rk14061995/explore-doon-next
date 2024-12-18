import Descritption from "../common/Descritption";
export default function PrivacyPolicy() {
  const pageData = {
                    title: "Privacy Policy",
                    description: "Explore Dehradun values your privacy. We want to clarify that we do not collect, store, or share any personal information when you visit our website https://exploredehradun.in/. Please read this policy to understand how we handle your privacy.",
                    sections: [
                            {
                                type: "string",
                                heading: "Information We Collect",
                                content:
                                "We do not collect any personal or non-personal information from visitors to our website.",
                            },
                            {
                                type: "string",
                                heading: "Use of Cookies",
                                content:
                                "Our website does not use cookies or other tracking technologies to monitor your browsing activity.",
                            },
                            {
                                type: "string",
                                heading: "Third-Party Links",
                                content:
                                "Our website may contain links to third-party websites, such as Expedia or social media platforms. These websites have their own privacy policies, and we are not responsible for their content or practices. We encourage you to review their privacy policies when visiting those sites.",
                            },
                            {
                                type: "string",
                                heading: "Data Security",
                                content:
                                "Since we do not collect any personal data, we do not store or manage any user information on our site. However, we strive to ensure that our website remains secure for all visitors.",
                            },
                            {
                                type: "string",
                                heading: "Changes to This Privacy Policy",
                                content:
                                "We may update this privacy policy from time to time. Any changes will be posted on this page, so please check back periodically.",
                            },
                            {
                                type: "string",
                                heading: "Contact Us",
                                content:
                                "If you have any questions or concerns about this privacy policy, feel free to contact us at:",
                            },
                            {
                                type: "array",
                                subType: "ul-list",
                                heading: "Contact Information",
                                content: [
                                {
                                    title: "Email",
                                    description: "hivalikanthi@gmail.com",
                                },
                                {
                                    title: "Address",
                                    description: "Village Patal, Pauri Garhwal, Uttarakhand, India",
                                },
                                ],
                            },
                        ],
                };

  return (
    <Descritption
      pageData={pageData}
      otherPage={true}
      page="Dehradun"
      currentPage="Privacy Policy"
      currentPagePath="/privacy-policy"
    />
  );
}
