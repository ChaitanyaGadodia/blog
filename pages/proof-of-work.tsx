import * as React from "react";

const work = [
  "https support on local machine",
  "mandate settings panel: the crux of the whole saas product - add lead flow, virtual numbers, project, team creations, campaings, call center integrations",
  "upload documents to cloudinary & s3",
  "301 redirects: https://www.raygesualdo.com/posts/301-redirects-with-nextjs/",
  "reimbursements panel: wrote & re-wrote the whole thing :)",
  "components & tests in pebble",
  "migrate to typescript",
  "added jest setup & started adding unit tests (aziz: good job)",
  "migrate from scss to css-in-js (emotion)",
  "developer panel",
  "Virtual Number Tagging to team, source, sub-source",
  "Site Registration: Channel Partner Leads flow",
  "Lead filters: filters to url encoding, filters: scroll into view, tests",
  "New navigation: sidebar, header",
  "Places auto complete: google maps places api",
  "Reports: customizable, filters customizable",
  "Migrate to formik",
  "moment to date-fns",
  "csv download - popup block",
  "Site Registration: lead without phone",
  "anarock.com: main website changes",
  "tech.anarock.com: lottie animations, intersection observer, custom hooks, images sprite, images lazy loading",
  "call center panel changes",
  "merge repos to create mono repo",
  "google analytics integration",
  "broker network panel: stories & developers crud",
  "cc: users phone country code's timezone base current time",
  "filters migration, tests",
  "freshchat inntegration",
  "Inventory: graphql, apollo, svelte, pwa, responsive",
  "Mentored intern: vanshay",
  "tech.anarock.com: v2",
  "Expression of Interest",
  "Razorpay integration",
  "eslint, prittier, image-min pre commit hooks",
  "perfomarmance tracking: reactGA.timings, window.performance.now(), ",
  "lead sdk",
  "optimizations",
  "5xx handling, client retry",
  "cypress tests",
  "mentored interns: raghav, pranav",
  "health-check",
  "Customizable widgets: charts, graphs, plots etc POC",
  "intelligent meetings POC",
  "help hero integration POC",
  "incentives panel",
  "webview authentication flow",
  "CP sourcing dashboard: upload csv, transfer, bulk updates",
  "customizable forms",
  "new cc panel",
  "lighthouse bulk POC"
];

export default class POW extends React.PureComponent {
  render() {
    return (
      <ul>
        {work.map(w => (
          <li key={w}>{w}</li>
        ))}
      </ul>
    );
  }
}
