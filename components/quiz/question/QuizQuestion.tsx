import { Button, Flex, Group, Paper, Radio } from '@mantine/core';
import { useForm } from '@mantine/form';
import { IconDiscountCheckFilled } from '@tabler/icons-react';
import React, { useState } from 'react';

import { type IQuestion } from '@/types/Question';

interface IQuizQuestionProps extends IQuestion {}

const QuizQuestion: React.FC<IQuizQuestionProps> = ({
  question,
  options,
  answer,
}) => {
  const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean>(false);

  const form = useForm({
    initialValues: {
      selectedOption: '',
    },
    validate: {
      selectedOption: (value) => {
        if (value === '') {
          return 'Please select an option';
        }
        const isCorrect = value === answer;
        setIsAnswerCorrect(isCorrect);
        return isCorrect ? undefined : (
          <div style={{ marginTop: '10px' }}>{'Incorrect answer'}</div>
        );
      },
    },
  });

  const handleSubmit: () => void = () => {
    form.validate();
  };

  return (
    <Paper mx={'xl'}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <Radio.Group
          name="selectedOption"
          label={question}
          error={form.errors.selectedOption}
          {...form.getInputProps('selectedOption')}
        >
          <Group mt="xs">
            <Flex
              mih={50}
              gap="md"
              justify="flex-start"
              align="flex-start"
              direction="column"
              wrap="wrap"
            >
              {options.map((option, index) => {
                return (
                  <div
                    key={index}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                    }}
                  >
                    <Radio key={index} value={option} label={option} />
                    {isAnswerCorrect && answer === option && (
                      <IconDiscountCheckFilled style={{ color: 'green' }} />
                    )}
                  </div>
                );
              })}
            </Flex>
          </Group>
        </Radio.Group>
        <Button type="submit" variant="filled" mt="lg" mb={'xl'}>
          Submit
        </Button>
      </form>
    </Paper>
  );
};

export default QuizQuestion;
