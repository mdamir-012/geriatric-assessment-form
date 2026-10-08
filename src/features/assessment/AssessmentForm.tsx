import '@mantine/dates/styles.css';

import { useState } from 'react';
import {
  Alert,
  Button,
  Checkbox,
  Code,
  NumberInput,
  Select,
  Stack,
  TextInput,
} from '@mantine/core';
import { DateInput } from '@mantine/dates';
import { schemaResolver, useForm } from '@mantine/form';
import { sampleAssessment } from './fixture';
import { assessmentSchema, type Assessment, MOBILITY } from './schema';

type AssessmentFormValues = Omit<
  Assessment,
  'mobility' | 'barthelIndex' | 'medicationCount' | 'consentObtained'
> & {
  mobility: Assessment['mobility'] | '';
  barthelIndex: number | string;
  medicationCount: number | string;
  consentObtained: boolean;
};

const mobilityOptions = MOBILITY.map((value) => ({
  value,
  label: value
    .split(/[_-]/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' '),
}));

type AssessmentFormProps = {
  onSave?: (assessment: Assessment) => void | Promise<void>;
};

export function AssessmentForm({ onSave }: AssessmentFormProps) {
  const [savedAssessment, setSavedAssessment] = useState<Assessment | null>(null);

  const form = useForm<AssessmentFormValues, Assessment>({
    mode: 'uncontrolled',
    initialValues: {
      mrn: '',
      patientName: '',
      dateOfBirth: '',
      assessmentDate: '',
      mobility: '',
      barthelIndex: '',
      medicationCount: '',
      pharmacistReviewRequested: false,
      followUpDate: '',
      consentObtained: false,
    },
    validate: schemaResolver(assessmentSchema),
    validateInputOnBlur: true,
    transformValues: (values) => assessmentSchema.parse(values),
  });

  const handleSubmit = async (values: Assessment) => {
    await new Promise((resolve) => setTimeout(resolve, 800));
    await onSave?.(values);
    setSavedAssessment(values);
  };

  return (
    <form onSubmit={form.onSubmit(handleSubmit)} onChange={() => setSavedAssessment(null)}>
      <Stack gap="md">
        <TextInput
          key={form.key('mrn')}
          label="Medical record number"
          placeholder="MRN-004821"
          {...form.getInputProps('mrn')}
        />
        <TextInput
          key={form.key('patientName')}
          label="Patient name"
          {...form.getInputProps('patientName')}
        />
        <DateInput
          key={form.key('dateOfBirth')}
          label="Date of birth"
          valueFormat="YYYY-MM-DD"
          {...form.getInputProps('dateOfBirth')}
        />
        <DateInput
          key={form.key('assessmentDate')}
          label="Assessment date"
          valueFormat="YYYY-MM-DD"
          maxDate={new Date()}
          {...form.getInputProps('assessmentDate')}
        />
        <Select
          key={form.key('mobility')}
          label="Mobility"
          data={mobilityOptions}
          {...form.getInputProps('mobility')}
        />
        <NumberInput
          key={form.key('barthelIndex')}
          label="Barthel Index"
          step={5}
          min={0}
          max={100}
          clampBehavior="none"
          {...form.getInputProps('barthelIndex')}
        />
        <NumberInput
          key={form.key('medicationCount')}
          label="Regular medications"
          min={0}
          max={30}
          clampBehavior="none"
          {...form.getInputProps('medicationCount')}
        />
        <Checkbox
          key={form.key('pharmacistReviewRequested')}
          label="Pharmacist review requested"
          {...form.getInputProps('pharmacistReviewRequested', { type: 'checkbox' })}
        />
        <DateInput
          key={form.key('followUpDate')}
          label="Next review date"
          valueFormat="YYYY-MM-DD"
          {...form.getInputProps('followUpDate')}
        />
        <Checkbox
          key={form.key('consentObtained')}
          label="Patient or representative has given consent"
          {...form.getInputProps('consentObtained', { type: 'checkbox' })}
        />
        <Button type="submit" loading={form.submitting}>
          Save assessment
        </Button>
        <Button
          type="button"
          variant="default"
          onClick={() => {
            form.setValues(sampleAssessment);
            setSavedAssessment(null);
          }}
        >
          Load sample patient
        </Button>
        {savedAssessment && (
          <Alert color="green" title="Assessment saved">
            <Code block>{JSON.stringify(savedAssessment, null, 2)}</Code>
          </Alert>
        )}
      </Stack>
    </form>
  );
}
