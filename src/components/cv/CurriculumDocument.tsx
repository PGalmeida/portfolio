import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
  Link,
} from "@react-pdf/renderer";
import { profile } from "@/content/profile";
import { projects } from "@/content/projects";

const styles = StyleSheet.create({
  page: {
    paddingTop: 36,
    paddingBottom: 36,
    paddingHorizontal: 40,
    fontSize: 10,
    color: "#0f1c24",
    fontFamily: "Helvetica",
  },
  header: {
    flexDirection: "row",
    gap: 16,
    marginBottom: 18,
    alignItems: "center",
  },
  photo: {
    width: 72,
    height: 72,
    borderRadius: 36,
    objectFit: "cover",
  },
  name: {
    fontSize: 18,
    fontFamily: "Helvetica-Bold",
    marginBottom: 4,
  },
  role: {
    fontSize: 11,
    color: "#0b6b63",
    marginBottom: 4,
  },
  meta: {
    fontSize: 9,
    color: "#4d5f6a",
    marginBottom: 2,
  },
  section: {
    marginTop: 14,
  },
  sectionTitle: {
    fontSize: 11,
    fontFamily: "Helvetica-Bold",
    textTransform: "uppercase",
    letterSpacing: 1,
    marginBottom: 6,
    color: "#0b6b63",
    borderBottomWidth: 1,
    borderBottomColor: "#d4ebe8",
    paddingBottom: 3,
  },
  paragraph: {
    lineHeight: 1.45,
    marginBottom: 4,
    color: "#0f1c24",
  },
  itemTitle: {
    fontFamily: "Helvetica-Bold",
    fontSize: 10,
  },
  itemMeta: {
    fontSize: 9,
    color: "#4d5f6a",
    marginBottom: 2,
  },
  bullet: {
    marginLeft: 8,
    marginBottom: 1,
  },
  skills: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 4,
  },
  skill: {
    fontSize: 8,
    backgroundColor: "#d4ebe8",
    paddingVertical: 3,
    paddingHorizontal: 6,
    borderRadius: 3,
    marginBottom: 3,
  },
  project: {
    marginBottom: 6,
  },
});

const featured = projects.filter((p) => p.featured);

type Props = {
  photoSrc: string;
};

export function CurriculumDocument({ photoSrc }: Props) {
  return (
    <Document
      title="Pedro Almeida — Currículo"
      author={profile.fullName}
      language="pt-BR"
    >
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          {/* eslint-disable-next-line jsx-a11y/alt-text */}
          <Image src={photoSrc} style={styles.photo} />
          <View>
            <Text style={styles.name}>{profile.fullName}</Text>
            <Text style={styles.role}>
              {profile.role} · {profile.company}
            </Text>
            <Text style={styles.meta}>{profile.location}</Text>
            <Text style={styles.meta}>{profile.email}</Text>
            <Link src={profile.linkedin} style={styles.meta}>
              LinkedIn
            </Link>
            <Link src={profile.github} style={styles.meta}>
              GitHub
            </Link>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Resumo</Text>
          <Text style={styles.paragraph}>{profile.headline}</Text>
          <Text style={styles.paragraph}>{profile.about[1]}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Experiência</Text>
          {profile.experience.map((job) => (
            <View key={job.title + job.org} style={{ marginBottom: 8 }}>
              <Text style={styles.itemTitle}>
                {job.title} — {job.org}
              </Text>
              <Text style={styles.itemMeta}>{job.period}</Text>
              {job.bullets.map((b) => (
                <Text key={b} style={styles.bullet}>
                  • {b}
                </Text>
              ))}
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Formação</Text>
          {profile.education.map((edu) => (
            <View key={edu.title} style={{ marginBottom: 6 }}>
              <Text style={styles.itemTitle}>
                {edu.title} — {edu.org}
              </Text>
              <Text style={styles.itemMeta}>
                {edu.detail} · {edu.period}
              </Text>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Competências</Text>
          <View style={styles.skills}>
            {profile.skills.map((skill) => (
              <Text key={skill} style={styles.skill}>
                {skill}
              </Text>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Projetos em destaque</Text>
          {featured.map((p) => (
            <View key={p.slug} style={styles.project}>
              <Text style={styles.itemTitle}>
                {p.title} — {p.subtitle}
              </Text>
              <Text style={styles.paragraph}>{p.summary}</Text>
              <Text style={styles.itemMeta}>{p.stack.join(" · ")}</Text>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
}
