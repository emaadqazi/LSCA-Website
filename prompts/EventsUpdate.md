# LSCA Events Update Template

Use this template to quickly add or update events on the LSCA website. Simply copy the prompt below and fill in the event details.

---

## Quick Add Event Prompt

```
Add a new event to EventsSection.tsx with the following details:

**Event Type:** [Speaker Panel / Trivia Night / Case Competition / Networking Event / Workshop / Other]

**Basic Info:**
- Title: [Event Name]
- Date: [Month Day, Year] (e.g., "January 12th, 2026")
- Time: [Start Time] to [End Time] (e.g., "7:00PM to 9:00PM")
- Location: [Building, Room Number] (e.g., "Lazaridis, LH2064")
- Expected Attendees: [Number]+

**Descriptions:**
- Short Description (for card): [1-2 sentences summarizing the event]
- Full Description (for modal): [Detailed description including prizes, rules, registration info, dress code, etc.]

**Speakers (if applicable):**
- Speaker 1: [Name], [Title/Position], [LinkedIn URL], [Photo filename in images/SpeakersPFP/]
- Speaker 2: ...
```

---

## Example: Trivia Night Event

```
Add a new event to EventsSection.tsx with the following details:

**Event Type:** Trivia Night

**Basic Info:**
- Title: Supply Chain Trivia
- Date: January 12th, 2026
- Time: 7:00PM to 9:00PM
- Location: Lazaridis, LH2064
- Expected Attendees: 100+

**Descriptions:**
- Short Description: Test your supply chain knowledge in our Jeopardy-style trivia night with a $250 prize pool!
- Full Description: Join us for an exciting evening of Supply Chain Trivia! Compete in 2-3 rounds of Jeopardy-style questions for a chance to win from our $250 prize pool. LSCA members can participate if they bring a team of friends. We're also giving away 2x $25 gift cards to attendees. Snacks included. Dress code is casual.

**Speakers:** None
```

---

## Example: Speaker Panel Event

```
Add a new event to EventsSection.tsx with the following details:

**Event Type:** Speaker Panel

**Basic Info:**
- Title: Careers in Supply Chain Speaker Panel
- Date: October 6th, 2025
- Time: 7:00PM to 9:00PM
- Location: Lazaridis, LH2064
- Expected Attendees: 150+

**Descriptions:**
- Short Description: Join us as 5 speakers share their insights and experiences working in the Supply Chain Industry
- Full Description: You will have the chance to hear 5 industry professionals speak about their experience working in Supply Chain. We have speakers from all backgrounds, whether that be academia, the liquor industry, consulting, and more. Join us for an event of networking and learning more about the Supply Chain Industry.

**Speakers:**
- Blessing Ukiri, Supply Chain & Operations at EY, https://www.linkedin.com/in/blessingukiri/, Blessing-Ukiri.jpeg
- Kunal Sheel, Sr. IT Analyst Supply Chain at Honey Well, https://www.linkedin.com/in/kunalsheel/, Kunal-Sheel.jpeg
```

---

## File Location

Events are stored in:
```
frontend/src/components/sections/EventsSection.tsx
```

## Speaker Photos

Upload speaker photos to:
```
frontend/public/images/SpeakersPFP/
```

Photo naming convention: `Firstname-Lastname.jpeg`

---

## Event Object Structure Reference

```typescript
{
  title: "Event Title",
  date: "Month Day, Year",
  time: "StartTime to EndTime",
  location: "Building, Room",
  attendees: "Number+",
  description: "Short card description",
  fullDescription: "Detailed modal description",
  speakers: [
    {
      name: "Speaker Name",
      title: "Position/Title",
      photo: `${baseUrl}images/SpeakersPFP/Filename.jpeg`,
      linkedin: "https://www.linkedin.com/in/username/"
    }
  ]
}
```

---

## Quick Commands

**Update existing event:**
```
Update the [Event Name] event in EventsSection.tsx:
- Change [field] to [new value]
```

**Remove event:**
```
Remove the [Event Name] event from EventsSection.tsx
```

**Reorder events:**
```
Move [Event Name] to position [1/2/3] in the events array
```
