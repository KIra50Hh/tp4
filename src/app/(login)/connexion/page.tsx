
"use client"
import { z } from 'zod';
import { useForm, zodResolver } from '@mantine/form';
import { PasswordInput, TextInput, Button, Box, Group } from '@mantine/core';


const schema = z.object({
  email: z.string().email('Format email invalide').min(1, 'L\'email est requis'),
  password: z.string().min(6, 'Le mot de passe doit faire au moins 6 caractères'),
});

function Demo() {
  const form = useForm({
    validate: zodResolver(schema),
    initialValues: {
      email: '',
      password: '',
    },
  });

  return (
    <Box maw={340} mx="auto">
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <TextInput
          withAsterisk
          label="Email"
          placeholder="exemple@mail.com"
          mt="sm"
          {...form.getInputProps('email')}
        />
        <PasswordInput
          withAsterisk
          label="Mot de passe"
          placeholder="Votre mot de passe"
          mt="sm"
          {...form.getInputProps('password')}
        />

        <Group {...{ justify: "flex-end", mt: "xl" }}>
        <Button type="submit">Soumettre</Button>
        </Group>
      </form>
    </Box>
  );
}
