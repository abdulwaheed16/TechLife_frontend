export const email_template = ({ data }) => {
  const groupedPackages = {};

  // Group packages by service
  data?.packages?.forEach((pkg, index) => {
    if (!groupedPackages[pkg.service]) {
      groupedPackages[pkg.service] = [];
    }

    groupedPackages[pkg.service].push(pkg);
  });

  const servicesAndPackages = Object.keys(groupedPackages).map((service) => {
    const packages = groupedPackages[service]
      .map(
        (pkg) => `
        <div key=${pkg.package}>
          <p style="color: #333; font-size: 14px;">* ${pkg.package} ${
          pkg.sub_package &&
          `<span style="font-size: 14px; color: #666;"> - ${pkg.sub_package}</span>`
        }</p>          
        </div>
      `
      )
      .join("");

    const servicePackagesCount = groupedPackages[service].length;

    return `
      <div style="margin-bottom: 20px; border-top: 1px solid #ccc;">
        <p style="font-weight: bold; color: #333; font-size: 16px;"> ${service}</p>
        <p style="color: #666; font-size: 14px;">${servicePackagesCount} ${
      packages.length > 1 ? "Packages" : "Package"
    }</p>
        ${packages}
      </div>
    `;
  });

  const servicesCount = Object.keys(groupedPackages).length;

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body {
          font-family: Arial, sans-serif;
          width: 60%;
          margin: 0;
          padding: 0;
          background-color: #f4f4f4;
        }
        .container {
          margin: 20px auto;
          padding: 20px;
          background-color: #fff;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .header {
          text-align: center;
        }
        .body {
          padding: 20px;
        }
      </style>
    </head>
    <body>
      <div class="container">  
        <div class="body">
          <h2 style="color: #333; font-size: 24px;">Client Information</h2>
          <p style="font-weight: bold; color: #333; font-size: 18px;">Name: ${
            data.fullname
          }</p>
          <p style="color: #666; font-size: 16px;">Email: ${data.email}</p>
          <h3 style="color: #333; font-style: italic;  margin-bottom:10px;">Referral Code: <code>${
            data.referral_code ? data?.referral_code : ` - - -  `
          }</code></h3>
          <h2 style="color: #333; ">Packages</h2>
          ${servicesCount} Services
          ${servicesAndPackages.join("")}
        </div>
      </div>
    </body>
    </html>
  `;
};
