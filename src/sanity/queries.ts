import { groq } from "next-sanity";

export const settingsQuery = groq`*[_type == "siteSettings"][0]{
  fullName, role, heroGreeting, heroTagline, heroSubtitle,
  availabilityBadge, available, profileImage, stats, location, email, phone, social,
  "resumeEnUrl": resumeEn.asset->url,
  "resumeFrUrl": resumeFr.asset->url,
  seoTitle, seoDescription
}`;

export const skillsQuery = groq`*[_type == "skill"]|order(order asc, name asc){
  _id, name, categoryKey, iconUrl, logo, color, order
}`;

export const experiencesQuery = groq`*[_type == "experience"]|order(order asc){
  _id, company, role, location, period, bullets, tags, logo, order
}`;

export const projectsQuery = groq`*[_type == "project"]|order(order asc){
  _id, title, summary, bullets, image, videoUrl,
  "videoFileUrl": videoFile.asset->url,
  tags, demoUrl, codeUrl, featured, order
}`;

export const educationQuery = groq`*[_type == "education"]|order(order asc){
  _id, institution, degree, location, period, details, logo, order
}`;

export const awardsQuery = groq`*[_type == "award"]|order(order asc){
  _id, title, issuer, date, description, order
}`;
