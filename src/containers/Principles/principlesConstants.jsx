import StyledButtonLink from "../../formComponents/StyledButton";

export const principles = [
  {
    title: "Strive for simplicity.",
    description:
      'Simple solutions to complex problems are hard, but when they exist, they feel inevitable. We strive to eliminate unnecessary complexity in our work. "If I had more time, I would have written a shorter letter." -Blaise Pascal or Winston Churchill (depending who you ask)',
  },
  {
    title: "Always be improving.",
    description:
      'This concept is so good that the Japanese have a dedicated word for it — Kaizen. It\'s an "infinite game" of continuous self improvement. Even small improvements, when made consistently over time, have an outsized impact on where you end up.',
  },
  {
    title: "Show is better than tell.",
    description:
      "Ideas are only as good as your ability to execute. Creating something new is full of magical moments. We believe those come from experiencing, not merely imagining. For that reason, we're biased towards routinely producing bits of work that you can see and feel.",
  },
  {
    title: "Deliver, and then some.",
    description:
      "We don't take our commitments lightly. Doing what you say you will is just table stakes. Always giving your honest best effort, striving to exceed expectations, and occasionally delivering a bit of surprise and delight? That is The Camber Way.",
  },
  {
    title: "Treat people right.",
    description:
      'Fundamentally, we are people serving people, and we think the "Golden Rule" never went out of style. We believe you get back what you give, and that treating people the way that you would want to be treated is the only way to thrive.',
  },
  {
    title: "Be autonomous & accountable.",
    description:
      'Our team members bring mastery and purpose in their craft. We work with autonomy and take accountability for our outcomes. As Uncle Ben probably said somewhere in the multiverse, "With great autonomy comes great accountability."',
  },
  {
    title: "Be an excellent collaborator.",
    description:
      "Though each individual contributor works with great autonomy, what we do requires the expertise of a team. The highest performing teams–the ones who produce the best outcomes–are those comprised of excellent collaborators.",
  },
  {
    title: "Assume positive intent.",
    description:
      "Communication is paramount to excellent collaboration, and there are often wide gaps between what is meant, what is said, and what is understood. The most effective teams assume positive intent in every interaction.",
  },
  {
    title: "Remember to enjoy yourself.",
    description:
      "Though we do serious and important work, we could all do with the occasional reminder that we’re all tiny beings hurtling through the infinite nothingness of space on an inconceivably small blue speck of space dust. But don't panic (and don't forget your towel), we've got work to do!",
  },
  {
    title: "Sound like you?",
    description:
      "We believe that the best way to learn is by doing. We are always learning and growing, and we encourage our team to do the same. We are students of the game, and we are always looking for ways to improve.",
    hasCta: true,
    ctaComponent: (
      <div className="flex gap-[1.6rem]">
        <StyledButtonLink fullWidth variant="primary">
          Start now at just $8k/mo
        </StyledButtonLink>
        <StyledButtonLink variant="secondary">
          or let&apos;s talk first
        </StyledButtonLink>
      </div>
    ),
  },
];
