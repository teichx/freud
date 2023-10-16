export type ArchiveActionProps = {
  patientId: string;
};

export type UseHandleArchive = () => {
  archivePatient: ({ patientId }: ArchiveActionProps) => void;
  unarchivePatient: ({ patientId }: ArchiveActionProps) => void;
};
