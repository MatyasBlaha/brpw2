import { Button, CloseButton, Drawer, Portal } from "@chakra-ui/react"

export default function Sibebar(){

    return (
        <Drawer.Root placement="start">
            <Drawer.Trigger asChild>
                <Button variant="outline" size="sm">
                    Open Drawer
                </Button>
            </Drawer.Trigger>
            <Portal>
                <Drawer.Backdrop />
                <Drawer.Positioner padding="4">
                    <Drawer.Content rounded="md">
                        <Drawer.Header>
                            <Drawer.Title>Drawer Title</Drawer.Title>
                        </Drawer.Header>
                        <Drawer.Body>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </Drawer.Body>
                        <Drawer.Footer>
                            <Button variant="outline">Cancel</Button>
                            <Button>Save</Button>
                        </Drawer.Footer>
                    </Drawer.Content>
                </Drawer.Positioner>
            </Portal>
        </Drawer.Root>
    )
}