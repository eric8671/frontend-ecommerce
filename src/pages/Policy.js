import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/policyimage.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div class="col-md-4">
  <h2>Privacy Policy</h2>
  <p>
    Welcome to our Privacy Policy page! When you use our web store services, you trust us with your information. This Privacy Policy is meant to help you understand what data we collect, why we collect it, and what we do with it. This is important; we hope you will take time to read it carefully. Remember, you can find controls to manage your information and protect your privacy and security at any time.
  </p>
  
  <h4>Information We Collect</h4>
  <p>
    Our store collects data to operate effectively and provide you the best experiences with our services. You provide some of this data directly, such as when you create a personal account. We get some of it by recording how you interact with our services by, for example, using technologies like cookies, and receiving error reports or usage data from software running on your device.
  </p>
  
  
  
  
  
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
